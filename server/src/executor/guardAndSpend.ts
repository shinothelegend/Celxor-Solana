import { PublicKey, Transaction, Keypair } from '@solana/web3.js';
import * as db from '../db/index.js';
import { getDelegateAllowance, getMint, checkIssuerGates, getSlot, buildJupiterSwapTransaction, armStopLoss, BOT_KEYPAIR, sendAndConfirmTransaction } from '../solana/index.js';
import { getJupiterQuote } from '../venues/jupiter.js';
import { checkPythGuard } from '../market/pyth.js';
import { checkPacing } from '../bot/pacing.js';

export const USDC_MINT = new PublicKey('EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v');

export async function guardAndSpend(
  userPubkey: PublicKey,
  agentId: string,
  symbol: string,
  amountUsdc: number,
  side: 'buy' | 'sell'
): Promise<{ signature: string } | { refusal: string }> {
  // 1. Grant row exists, not expired, not revoked
  const grant = await db.getGrant(userPubkey, agentId);
  if (!grant || grant.revoked || grant.expiresAt < new Date()) {
    return { refusal: 'no_delegation' };
  }

  // 2. On-chain allowance for delegate >= this spend
  const onChainAllowance = await getDelegateAllowance(userPubkey, USDC_MINT, BOT_KEYPAIR.publicKey);
  if (onChainAllowance < amountUsdc) {
    return { refusal: 'on_chain_allowance_exceeded' };
  }

  // 3. Daily cap remaining >= this spend (only for buys; sells exempt)
  if (side === 'buy') {
    const dailySpent = await db.getDailySpent(userPubkey, agentId);
    if (dailySpent + amountUsdc > grant.dailyCap) {
      return { refusal: 'daily_cap' };
    }
  }

  // 4. Symbol is on the agent's allowlist
  if (!grant.allowedSymbols.includes(symbol)) {
    return { refusal: 'symbol_not_allowed' };
  }

  // 5. Token-2022 issuer gates
  const mint = getMint(symbol);
  if (!mint) {
    return { refusal: 'unknown_symbol' };
  }
  
  const issuerGates = await checkIssuerGates(mint, userPubkey);
  if (!issuerGates.passed) {
    return { refusal: `issuer_${issuerGates.reason}` };
  }

  // 6. Live Jupiter quote exists; price impact and min-out inside limits
  const quote = await getJupiterQuote(USDC_MINT, mint, amountUsdc, side);
  if (!quote || quote.priceImpactPct > grant.maxPriceImpact) {
    return { refusal: 'no_route_or_impact' };
  }

  // 7. Off-hours guard
  const pythVerdict = await checkPythGuard(symbol, quote.midPrice);
  if (!pythVerdict.passed) {
    return { refusal: `pyth_${pythVerdict.reason}` };
  }

  // 8. Pacing: <=1 new entry per symbol per day; per-trade cap; cooldown
  const pacing = await checkPacing(userPubkey, agentId, symbol, amountUsdc);
  if (!pacing.passed) {
    return { refusal: `pacing_${pacing.reason}` };
  }

  // 9. Execute Jupiter swap
  const tx = await buildJupiterSwapTransaction(quote, userPubkey, BOT_KEYPAIR.publicKey);
  const signature = await sendAndConfirmTransaction(tx, BOT_KEYPAIR);
  if (!signature) {
    return { refusal: 'swap_failed' };
  }

  // 10. Arm stop-loss and take-profit (delegate sell path)
  await armStopLoss(userPubkey, agentId, symbol, quote.outAmount, grant.stopLossPct);

  // 11. Persist run + signature + slot + explorer URL
  await db.recordExecution({
    userPubkey: userPubkey.toBase58(),
    agentId,
    symbol,
    side,
    amountUsdc,
    signature,
    slot: await getSlot(),
    explorerUrl: `https://explorer.solana.com/tx/${signature}`,
  });

  return { signature };
}
