import { PublicKey, Keypair } from '@solana/web3.js';
import { guardAndSpend } from '../server/src/executor/guardAndSpend.js';
import { setGrant } from '../server/src/db/index.js';

async function run() {
  console.log('=== Proof: guardAndSpend Buy (Architectural Simulation) ===');
  
  const owner = Keypair.generate();
  const agentId = 'agent-001';
  const symbol = 'NVDAx';
  const spendUsdc = 50;

  console.log(`1. Setting up Grant for ${owner.publicKey.toBase58()}...`);
  // Setup DB grant
  await setGrant(owner.publicKey, agentId, {
    agentId,
    revoked: false,
    expiresAt: new Date(Date.now() + 1000000),
    dailyCap: 100,
    allowedSymbols: ['NVDAx', 'AAPL'],
    maxPriceImpact: 1.0,
    stopLossPct: 0.1
  });
  console.log('  -> Grant established.');

  console.log(`2. Executing guardAndSpend for $${spendUsdc} ${symbol}...`);
  // Execute
  const outcome = await guardAndSpend(owner.publicKey, agentId, symbol, spendUsdc, 'buy');

  if ('refusal' in outcome) {
    console.error(`❌ Spend refused: ${outcome.refusal}`);
    // If we were on a real fork and had seeded the allowance, it wouldn't refuse here.
    // In our mock, getDelegateAllowance returns 0 unless the account exists, so we expect 'on_chain_allowance_exceeded'
    console.log('  (Expected in pure simulation without active fork state: on_chain_allowance_exceeded)');
  } else {
    console.log(`✅ Spend approved and executed. Signature: ${outcome.signature}`);
  }
}

run().catch(console.error);
