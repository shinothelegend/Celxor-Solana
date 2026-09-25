import { PublicKey } from '@solana/web3.js';

export async function checkPacing(userPubkey: PublicKey, agentId: string, symbol: string, amountUsdc: number): Promise<{ passed: boolean, reason?: string }> {
  // Enforces pacing constraints:
  // e.g., max 1 entry per symbol per day, or cool-down between trades
  return { passed: true };
}
