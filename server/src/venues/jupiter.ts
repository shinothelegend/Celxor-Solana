import { PublicKey } from '@solana/web3.js';

export async function getJupiterQuote(inMint: PublicKey, outMint: PublicKey, amountUsdc: number, side: 'buy' | 'sell') {
  // Mock Jupiter quote response
  const priceUsd = 125.50; // Mock NVDAx price
  return {
    inAmount: amountUsdc,
    outAmount: side === 'buy' ? amountUsdc / priceUsd : amountUsdc * priceUsd,
    priceImpactPct: 0.1, // 0.1%
    midPrice: priceUsd,
    routePlan: []
  };
}
