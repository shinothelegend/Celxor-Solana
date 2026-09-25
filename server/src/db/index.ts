import { PublicKey } from '@solana/web3.js';

export interface Grant {
  agentId: string;
  revoked: boolean;
  expiresAt: Date;
  dailyCap: number;
  allowedSymbols: string[];
  maxPriceImpact: number;
  stopLossPct: number;
}

// In-memory mock for now
const grants = new Map<string, Grant>();
const dailySpent = new Map<string, number>();

export async function getGrant(userPubkey: PublicKey, agentId: string): Promise<Grant | null> {
  const key = `${userPubkey.toBase58()}-${agentId}`;
  return grants.get(key) || null;
}

export async function getDailySpent(userPubkey: PublicKey, agentId: string): Promise<number> {
  const key = `${userPubkey.toBase58()}-${agentId}`;
  return dailySpent.get(key) || 0;
}

export async function setGrant(userPubkey: PublicKey, agentId: string, grant: Grant) {
  const key = `${userPubkey.toBase58()}-${agentId}`;
  grants.set(key, grant);
}

export async function recordExecution(data: any) {
  // Mock persistence
  console.log('[DB] Execution recorded:', data);
  if (data.side === 'buy') {
    const key = `${data.userPubkey}-${data.agentId}`;
    const current = dailySpent.get(key) || 0;
    dailySpent.set(key, current + data.amountUsdc);
  }
}
