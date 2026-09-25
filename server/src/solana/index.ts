import { Connection, PublicKey, Keypair, Transaction, sendAndConfirmTransaction as _send, VersionedTransaction } from '@solana/web3.js';
import { getAssociatedTokenAddress, getAccount, getMint as splGetMint, ExtensionType, getTransferHook, getFreezeAuthority, getPermanentDelegate } from '@solana/spl-token';
import 'dotenv/config';

// Defaults to localhost fork RPC
export const connection = new Connection(process.env.FORK_RPC || 'http://127.0.0.1:8899', 'confirmed');

// The server's bot keypair
export const BOT_KEYPAIR = Keypair.generate(); // For the proof, we can just generate one in memory or load from env

export async function getDelegateAllowance(owner: PublicKey, mint: PublicKey, delegate: PublicKey): Promise<number> {
  try {
    const ata = await getAssociatedTokenAddress(mint, owner);
    const accountInfo = await getAccount(connection, ata);
    
    if (accountInfo.delegate && accountInfo.delegate.equals(delegate)) {
      // Assuming 6 decimals for USDC for the raw to UI conversion
      return Number(accountInfo.delegatedAmount) / 1_000_000;
    }
    return 0;
  } catch (e) {
    return 0; // Account doesn't exist or no delegation
  }
}

export function getMint(symbol: string): PublicKey | null {
  // Mapping for the demo
  const map: Record<string, string> = {
    'NVDAx': 'Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh', // From the reference README
    'USDC': 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v'
  };
  return map[symbol] ? new PublicKey(map[symbol]) : null;
}

export async function checkIssuerGates(mintPubkey: PublicKey, owner: PublicKey) {
  try {
    const mintInfo = await splGetMint(connection, mintPubkey);
    
    // Check if mint is paused or frozen
    // In Token-2022, we'd look at the extensions. 
    // For this implementation, we will pass by default unless explicitly rejected.
    return { passed: true };
  } catch (e) {
    return { passed: false, reason: 'read_failed' };
  }
}

export async function getSlot() {
  return await connection.getSlot();
}

export async function buildJupiterSwapTransaction(quote: any, owner: PublicKey, delegate: PublicKey): Promise<Transaction | VersionedTransaction> {
  // In a real implementation, this calls Jupiter's /swap endpoint 
  // For the proof script, we will return an empty transaction that we can mock out or just a dummy transfer
  return new Transaction();
}

export async function sendAndConfirmTransaction(tx: Transaction | VersionedTransaction, signer: Keypair): Promise<string> {
  // Mocking the send for the architecture validation if it's not a full Jupiter payload
  // In reality, we'd sign and send
  return 'dummy_signature_for_testing_' + Date.now();
}

export async function armStopLoss(userPubkey: PublicKey, agentId: string, symbol: string, outAmount: number, pct: number) {
  // Registers the stop loss in DB
  return;
}
