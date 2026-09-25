# FEATURES.md: Implementation Tracking

## Core Product
- [x] **Non-custodial Model**: Agent trades using a delegate keypair, user retains custody.
- [x] **SPL Delegation**: Native `ApproveChecked` logic validated in backend chokepoint.
- [x] **Kill Switch**: `Revoke` capability implemented and verified.
- [ ] **Privy Authentication**: Embedded Solana wallet generation.
- [ ] **Agent Brain**: "Calm", "Balanced", "Sharp" risk profiles.

## Backend / Executor
- [x] **guardAndSpend Chokepoint**: All trades pass through a single validation function.
- [x] **Issuer Gates Check**: Pre-flight check for Token-2022 transfer restrictions.
- [x] **Pyth Oracle Guard**: Price deviation check between Jupiter routing and Pyth `Equity.US.<TICKER>/USD` feeds to ensure safe off-hours pricing.
- [x] **Pacing Engine**: DB-backed constraints (daily caps, cooldowns).
- [ ] **Hono Server Routes**: HTTP API for frontend interactions.

## Frontend UI
- [ ] **Next.js App Router**: Web-only implementation.
- [ ] **Arctic Observatory Aesthetic**: Implementation of the void/glacier/aurora color palette.
- [ ] **Scene Headers**: Integration of the provided reference landscape images.
- [ ] **Night Desk Dashboard**: The main user interface.
- [ ] **Activity Receipt Log**: Plain language explanations of agent decisions.
- [ ] **Honest Errors**: Human-readable error states.

## Testing & Validation
- [x] **Buy Proof**: `tools/prove-buy.ts`
- [x] **Kill Switch Proof**: `tools/prove-kill.ts`
- [ ] **Mainnet Forking**: Full e2e test execution against cloned mainnet state.

*(Note: Features listed as incomplete are scheduled for the next phase of development. The underlying architectural validation is complete.)*
