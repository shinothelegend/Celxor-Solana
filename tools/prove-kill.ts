import { PublicKey, Keypair } from '@solana/web3.js';
import { getGrant, setGrant } from '../server/src/db/index.js';

async function run() {
  console.log('=== Proof: Kill Switch (Revoke) ===');
  
  const owner = Keypair.generate();
  const agentId = 'agent-001';

  console.log(`1. Setting up Active Grant for ${owner.publicKey.toBase58()}...`);
  await setGrant(owner.publicKey, agentId, {
    agentId,
    revoked: false,
    expiresAt: new Date(Date.now() + 1000000),
    dailyCap: 100,
    allowedSymbols: ['NVDAx'],
    maxPriceImpact: 1.0,
    stopLossPct: 0.1
  });

  const active = await getGrant(owner.publicKey, agentId);
  console.log('  -> Grant active? ', !active?.revoked);

  console.log(`2. User hits the Kill Switch...`);
  // In reality, this creates an SPL revoke transaction signed by the user.
  // Our backend just marks it as revoked for DB-level pacing, but the chain is the ultimate truth.
  
  // Simulate DB revoke
  await setGrant(owner.publicKey, agentId, {
    ...active!,
    revoked: true
  });

  const revoked = await getGrant(owner.publicKey, agentId);
  console.log('  -> Grant revoked? ', revoked?.revoked);

  console.log(`✅ Kill Switch simulation completed.`);
}

run().catch(console.error);
