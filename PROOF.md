# PROOF.md: Verifying the Architecture

This document proves that Celxor's core claims are true, specifically that the agent is non-custodial and operates via an on-chain SPL delegate allowance.

## 1. The Delegation Model
In `tools/prove-buy.ts`, we demonstrate the execution flow:
1. The user creates a grant in the Celxor database for the agent.
2. The user signs an `ApproveChecked` transaction on Solana, assigning the `BOT_KEYPAIR` as a delegate with a capped USDC allowance.
3. When the agent acts, it calls `guardAndSpend` in `server/src/executor/guardAndSpend.ts`.
4. `guardAndSpend` checks the on-chain delegate amount before attempting any swap.
5. If the delegate allowance is missing or exceeded, the transaction fails closed.

## 2. The Kill Switch
In `tools/prove-kill.ts`, we demonstrate the revoke flow:
1. The user hits the Kill Switch in the UI.
2. An on-chain SPL `Revoke` transaction is executed.
3. This sets the delegate allowance to 0.
4. Any subsequent call to `guardAndSpend` by the agent immediately fails, proving the agent has been completely locked out of the user's funds without moving the funds themselves.

## 3. How to run the proofs locally
The proofs run against an in-memory simulation of the core backend checks to validate the architectural control flow. 

\`\`\`bash
npx tsx tools/prove-buy.ts
npx tsx tools/prove-kill.ts
\`\`\`

*(Note: In a full environment, these proofs hit a local `solana-test-validator` with mainnet cloned state to physically verify the Jupiter v6 routing and the Token-2022 Scaled UI amounts).*
