# Celxor

**A night desk for tokenized stocks you can revoke.**

Celxor is a non-custodial, AI-agent powered trading desk for tokenized US Equities (xStocks) on Solana. It operates around the clock, evaluating Jupiter routes against Pyth off-hours pricing, and executes trades autonomously through a single cryptographic chokepoint without ever holding your private keys.

## The Architecture
Celxor is built entirely on the principle of **Revocable Permission**.
Rather than a traditional custodian where you hand over funds, Celxor operates using Solana's native SPL Token Delegation.

1. **You Fund:** You deposit USDC and SOL into your own Privy-secured embedded wallet.
2. **You Grant:** You sign a native `ApproveChecked` transaction to grant the Celxor Agent a strictly capped daily USDC allowance.
3. **The Chokepoint:** The Celxor Agent watches the markets 24/7. When it decides to buy, it calls a single function: `guardAndSpend`. This chokepoint verifies the grant, the off-hours pricing (Pyth), the token's Token-2022 issuer gates, and the daily cap before executing a Jupiter swap on your behalf.
4. **The Kill Switch:** At any point, a single click signs an on-chain `Revoke` transaction. The SPL token program instantly drops the agent's allowance to 0.

## Why it matters
By keeping the private key on the client and delegating only allowance to the backend agent, we unlock autonomous, 24/7 AI-driven trading that is provably unable to drain a user's wallet beyond their declared limits.

## Project Structure
- `apps/web/`: The Next.js App Router frontend, featuring an "arctic observatory" design language.
- `server/`: The Hono + Postgres executor. Contains the `guardAndSpend` chokepoint, the Pyth/Jupiter adapters, and the agent logic.
- `infra/solana-fork/`: Scripts to bootstrap a local mainnet clone for safe E2E testing.
- `tools/`: Proof scripts validating the architecture.

## Supported Assets (v1)
- **NVDAx**
- **AAPLx**
- **TSLAx**
- **MSFTx**
- **SPYx**

*(Note: Pre-IPO tokens, Perps, and Yield features are explicitly excluded from this build to focus on the core xStocks agent experience).*

Celxor is a night desk for tokenized stocks on Solana.

Tokenized equities trade 24/7. The cash equity does not. Nobody watches the overnight spread. Handing a bot your keys is a trust problem, not a trading problem.

So the permission is the product. You sign one on-chain grant — a daily cap, a duration, and a set of allowed xStocks. The agent trades inside that permission, reading Pyth for off-hours marks and Jupiter for liquidity. Every action is auditable. Every refusal is explained in plain language. One tap revokes everything on-chain, even if our server is down.

Non-custodial. Your wallet, your keys, your control.

## Development
To run locally:
\`\`\`bash
npm run dev:web
npm run dev:server
\`\`\`

Built for the Stocklana hackathon on Solana. Uses Token-2022 Scaled UI, SPL ApproveChecked / Revoke, Jupiter v6, and Pyth Equity.US.* price feeds.
