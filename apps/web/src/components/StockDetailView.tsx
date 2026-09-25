import React, { useState } from 'react';
import type { ViewState } from './Header';

export function StockDetailView({ setView }: { setView: (view: ViewState) => void }) {
  const [logs, setLogs] = useState<{time: string, slot: number, action: string, status: string}[]>([
    {time: '03:41:22 UTC', slot: 37281102, action: 'Pyth $128.40 / Jup $130.20 -> Spread +1.40% > 0.80% limit.', status: 'ACTION_BLOCKED: OFF_HOURS_GATE'},
    {time: '03:41:19 UTC', slot: 37281096, action: 'Pyth $128.40 / Jup $130.22 -> Spread +1.41% > 0.80% limit.', status: 'ACTION_BLOCKED: OFF_HOURS_GATE'},
    {time: '03:41:16 UTC', slot: 37281090, action: 'Chainlink PoR verifies 1,492,000 shares in custody; mint supply 1,492,000.', status: 'PROOF_OK: 1:1 RATIO CONFIRMED'},
    {time: '03:41:12 UTC', slot: 37281082, action: 'Pyth benchmark refreshed via Pyth Solana Receiver program.', status: 'CONF_BOUND: ±0.02 USD'},
  ]);
  const [isBuying, setIsBuying] = useState(false);
  const [isSelling, setIsSelling] = useState(false);

  const handleManualBuy = () => {
    setIsBuying(true);
    appendLog('MANUAL BUY 1.0 NVDAx');
    setTimeout(() => setIsBuying(false), 1500);
  };

  const handleManualSell = () => {
    setIsSelling(true);
    appendLog('MANUAL SELL 1.0 NVDAx');
    setTimeout(() => setIsSelling(false), 1500);
  };

  const appendLog = (actionName: string) => {
    const now = new Date();
    const timeStr = now.toTimeString().split(' ')[0] + ' UTC';
    const dummySlot = Math.floor(37281102 + Math.random() * 50);
    setLogs(prev => [
      {time: timeStr, slot: dummySlot, action: `${actionName} transaction submitted by local key. Bypassing spread check.`, status: 'SIGNATURE_REQUESTED'},
      ...prev
    ]);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Top Horizon Observational Header */}
      <section className="relative w-full -mt-16 overflow-hidden bg-surface-container-lowest border-b border-outline-variant/30">
        <div className="w-full h-[38vh] min-h-[290px] max-h-[440px] bg-cover bg-center relative flex flex-col justify-between" style={{ backgroundImage: "url('/images/scene_b.jpg')" }}>
          <div className="absolute inset-0 bg-gradient-to-b from-surface-container-lowest/80 via-transparent to-surface-container-lowest pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest/90 via-surface-container-lowest/30 to-surface-container-lowest/90 pointer-events-none"></div>
          
          <div className="relative z-10 w-full pt-20 px-margin flex items-center justify-between">
            <div className="flex items-center gap-space-sm font-label-sm text-label-sm text-outline tracking-widest uppercase">
              <span className="text-tertiary">SECTOR · 04-NVDA</span>
              <span>/</span>
              <span>ORBITAL REFINEMENT #1094</span>
              <span>/</span>
              <span className="hidden sm:inline text-on-surface-variant">42.238°N 71.058°W</span>
            </div>
            <div className="flex items-center gap-space-xs bg-surface-container-lowest/90 border border-outline-variant/40 px-space-sm py-1">
              <span className="w-1.5 h-1.5 bg-tertiary"></span>
              <span className="font-label-sm text-label-sm text-tertiary tracking-widest uppercase font-semibold">OBSERVING SPREAD</span>
            </div>
          </div>
          
          <div className="relative z-10 w-full px-margin pb-space-lg flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <div>
              <div className="flex items-center gap-space-sm mb-space-xs font-label-md text-label-md text-secondary tracking-widest uppercase">
                <span>ISSUER // BACKED FINANCE (bNVDA)</span>
                <span className="w-1 h-1 bg-outline-variant"></span>
                <span>TOKEN-2022 STANDARDS</span>
              </div>
              <h1 className="font-display-lg text-display-lg text-primary tracking-tight leading-none">
                NVDAx <span className="font-body-md text-body-md text-outline font-normal ml-space-xs tracking-normal">// NVIDIA Tokenized Stock</span>
              </h1>
            </div>
            <div className="flex items-center gap-gutter font-label-sm text-label-sm text-outline border-l border-outline-variant/30 pl-space-md">
              <div>
                <div className="text-outline uppercase">TELEMETRY CYCLE</div>
                <div className="text-on-surface font-body-sm text-body-sm">0.400s QUOTE TICK</div>
              </div>
              <div>
                <div className="text-outline uppercase">SOLANA PROGRAM</div>
                <div className="text-primary font-body-sm text-body-sm">bkdF...NV99</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ground Plane Observational Grid */}
      <div className="w-full px-margin py-space-xl flex flex-col gap-space-xl max-w-7xl mx-auto">
        <div className="w-full bg-surface-container-lowest border border-[#FFB020]/70 p-space-md flex flex-col md:flex-row md:items-center justify-between gap-space-md">
          <div className="flex items-start gap-space-md">
            <div className="w-6 h-6 shrink-0 bg-[#FFB020]/10 border border-[#FFB020]/40 flex items-center justify-center mt-0.5">
              <span className="material-symbols-outlined text-[#FFB020] text-[16px]">lock_clock</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-space-sm">
                <span className="font-label-lg text-label-lg text-[#FFB020] uppercase font-bold tracking-widest">GUARD REFUSAL ACTIVE</span>
                <span className="font-label-sm text-label-sm px-1.5 py-0.5 bg-[#FFB020]/10 text-[#FFB020] uppercase">TOLERANCE EXCEEDED</span>
              </div>
              <p className="font-body-md text-body-md text-on-surface mt-0.5">
                Pool is 1.40% over Pyth overnight mark. Autonomous agent is holding execution.
              </p>
              <span className="font-label-sm text-label-sm text-outline mt-1">
                CRITERION: Max allowable spread under Balanced profile is 0.80%. Direct minting route inactive during US market closure.
              </span>
            </div>
          </div>
          <div className="shrink-0 flex items-center gap-space-sm self-end md:self-center font-label-sm text-label-sm text-[#FFB020]">
            <span className="material-symbols-outlined text-[14px]">shield_with_heart</span>
            <span className="uppercase tracking-widest">AUTONOMOUS BRAKE ARMED</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
          {/* Pyth Mark */}
          <div className="bg-surface-container-low border border-outline-variant/30 p-space-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-outline-variant/20 pb-space-sm mb-space-md">
                <div className="flex items-center gap-space-xs font-label-md text-label-md uppercase tracking-widest text-outline">
                  <span className="material-symbols-outlined text-secondary text-[14px]">sensors</span>
                  <span>PYTH OVERNIGHT MARK</span>
                </div>
                <span className="font-label-sm text-label-sm text-tertiary uppercase tracking-wider">OFFICIAL SYNTH FEED</span>
              </div>
              <div className="font-label-sm text-label-sm text-outline uppercase tracking-wider mb-1">REFERENCE BENCHMARK</div>
              <div className="font-body-lg text-[32px] leading-tight text-primary font-light tabular-nums flex items-baseline gap-space-xs">
                <span>$128.40</span>
                <span className="font-label-md text-label-md text-outline">USD</span>
              </div>
            </div>
            <div className="mt-space-lg pt-space-sm border-t border-outline-variant/20 flex flex-wrap items-center justify-between gap-space-xs font-label-sm text-label-sm text-outline">
              <div className="flex items-center gap-1.5">
                <span>CONFIDENCE:</span>
                <span className="text-on-surface tabular-nums">±$0.02</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span>ORACLE SLOT:</span>
                <span className="text-on-surface tabular-nums">#37,281,102</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span>PUBLISHER QUORUM:</span>
                <span className="text-tertiary">32/34 NODES</span>
              </div>
            </div>
          </div>
          
          {/* Jupiter Quote */}
          <div className="bg-surface-container-low border border-outline-variant/30 p-space-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-outline-variant/20 pb-space-sm mb-space-md">
                <div className="flex items-center gap-space-xs font-label-md text-label-md uppercase tracking-widest text-outline">
                  <span className="material-symbols-outlined text-secondary text-[14px]">swap_horiz</span>
                  <span>JUPITER POOL QUOTE</span>
                </div>
                <span className="font-label-sm text-label-sm text-[#FFB020] uppercase tracking-wider font-semibold">OVER-MARK (+1.40%)</span>
              </div>
              <div className="font-label-sm text-label-sm text-outline uppercase tracking-wider mb-1">SPOT ROUTING (BEST LIQUIDITY)</div>
              <div className="font-body-lg text-[32px] leading-tight text-on-surface font-light tabular-nums flex items-baseline gap-space-xs">
                <span>$130.20</span>
                <span className="font-label-md text-label-md text-outline">USDC</span>
              </div>
            </div>
            <div className="mt-space-lg pt-space-sm border-t border-outline-variant/20 flex flex-wrap items-center justify-between gap-space-xs font-label-sm text-label-sm text-outline">
              <div className="flex items-center gap-1.5">
                <span>DIVERGENCE:</span>
                <span className="text-[#FFB020] tabular-nums font-semibold">+$1.80 USDC</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span>AMM VENUE:</span>
                <span className="text-on-surface">METEORA DLMM (NVDAx/USDC)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span>IMPACT (100u):</span>
                <span className="text-tertiary">0.03%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md items-start">
          <div className="lg:col-span-7 bg-surface-container-lowest border border-outline-variant/30">
            <div className="px-space-md py-space-sm border-b border-outline-variant/20 flex items-center justify-between bg-surface-container-low">
              <span className="font-label-sm text-label-sm text-outline uppercase tracking-widest">ON-CHAIN SPECIFICATIONS // TOKEN-2022</span>
              <span className="font-label-sm text-label-sm text-tertiary tracking-widest">PROGRAM: TokenzQdBNb</span>
            </div>
            <div className="p-space-md flex flex-col gap-space-md">
              <div className="flex items-center justify-between border-b border-outline-variant/10 pb-space-sm font-body-sm text-body-sm">
                <span className="text-outline uppercase">Share Multiplier Ratio</span>
                <span className="text-on-surface font-label-lg text-label-lg tabular-nums">1.000000 <span className="text-outline font-normal">(1 NVDAx = 1 Share of NVIDIA Corp)</span></span>
              </div>
              <div className="flex items-center justify-between border-b border-outline-variant/10 pb-space-sm font-body-sm text-body-sm">
                <span className="text-outline uppercase">Custodian Institution</span>
                <span className="text-on-surface">Backed Assets GmbH (Baar, Switzerland)</span>
              </div>
              <div className="flex items-center justify-between border-b border-outline-variant/10 pb-space-sm font-body-sm text-body-sm">
                <span className="text-outline uppercase">Collateral Verification</span>
                <span className="text-tertiary">100% Asset Backed (Audited Chainlink PoR)</span>
              </div>
              
              <div className="mt-space-xs">
                <div className="font-label-sm text-label-sm text-outline uppercase tracking-wider mb-space-xs">
                  TOKEN EXTENSION AUTHORITY REGISTER
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-xs">
                  <div className="bg-surface-container-low border border-outline-variant/20 p-space-xs flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-outline uppercase">Pause Authority</span>
                    <span className="font-label-sm text-label-sm text-on-surface px-1.5 bg-surface-container-highest border border-outline-variant/30">ENABLED</span>
                  </div>
                  <div className="bg-surface-container-low border border-outline-variant/20 p-space-xs flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-outline uppercase">Freeze Authority</span>
                    <span className="font-label-sm text-label-sm text-on-surface px-1.5 bg-surface-container-highest border border-outline-variant/30">ENABLED</span>
                  </div>
                  <div className="bg-surface-container-low border border-outline-variant/20 p-space-xs flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-outline uppercase">Permanent Delegate</span>
                    <span className="font-label-sm text-label-sm text-outline px-1.5 bg-surface-container-lowest border border-outline-variant/20">NONE (REVOKED)</span>
                  </div>
                  <div className="bg-surface-container-low border border-outline-variant/20 p-space-xs flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-outline uppercase">Transfer Hook</span>
                    <span className="font-label-sm text-label-sm text-tertiary px-1.5 bg-tertiary/10 border border-tertiary/30">ACTIVE // KYC CHECK</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-space-xs pt-space-xs border-t border-outline-variant/20 font-label-sm text-label-sm text-outline flex items-center justify-between">
                <span>ISIN: CH1175293077</span>
                <span>TOKEN ADDRESS: NVDAx...8Q29</span>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-5 bg-surface-container-lowest border border-outline-variant/30 flex flex-col justify-between">
            <div className="px-space-md py-space-sm border-b border-outline-variant/20 flex items-center justify-between bg-surface-container-low">
              <span className="font-label-sm text-label-sm text-outline uppercase tracking-widest">DESK ALLOCATION REGISTER</span>
              <span className="w-2 h-2 bg-tertiary"></span>
            </div>
            <div className="p-space-md flex flex-col gap-space-md">
              <div>
                <div className="font-label-sm text-label-sm text-outline uppercase tracking-wider mb-1">TOTAL LEDGER POSITION</div>
                <div className="font-body-lg text-[28px] text-primary font-medium tabular-nums leading-none">
                  85.000000 <span className="font-body-sm text-body-sm text-outline">NVDAx</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-space-sm pt-space-xs border-t border-outline-variant/10">
                <div>
                  <div className="font-label-sm text-label-sm text-outline uppercase">ESTIMATED VALUE</div>
                  <div className="font-body-md text-body-md text-on-surface font-semibold tabular-nums mt-0.5">
                    $10,914.00 <span className="text-outline font-normal">USDC</span>
                  </div>
                  <div className="font-label-sm text-label-sm text-outline mt-0.5">@ MARK $128.40</div>
                </div>
                <div>
                  <div className="font-label-sm text-label-sm text-outline uppercase">UNREALIZED P&L</div>
                  <div className="font-body-md text-body-md text-error font-semibold tabular-nums mt-0.5">
                    -$84.20 (-0.76%)
                  </div>
                  <div className="font-label-sm text-label-sm text-outline mt-0.5">COST BASIS: $129.39</div>
                </div>
              </div>
              <div className="bg-surface-container-low border border-outline-variant/20 p-space-sm flex flex-col gap-1 font-label-sm text-label-sm text-outline">
                <div className="flex justify-between">
                  <span>VAULT STATE:</span>
                  <span className="text-on-surface">STATION NON-CUSTODIAL</span>
                </div>
                <div className="flex justify-between">
                  <span>UNCOMMITTED USDC:</span>
                  <span className="text-on-surface tabular-nums">42,108.45 USDC</span>
                </div>
                <div className="flex justify-between">
                  <span>LAST EXECUTED SLOT:</span>
                  <span className="text-on-surface tabular-nums">#37,249,010</span>
                </div>
              </div>
            </div>
            <div className="px-space-md py-space-xs border-t border-outline-variant/20 bg-surface-container-low/50 font-label-sm text-label-sm text-outline flex justify-between">
              <span>PORTFOLIO WEIGHT</span>
              <span className="text-on-surface">20.58% TOTAL AUM</span>
            </div>
          </div>
        </div>

        <div className="w-full bg-surface-container-low border border-outline-variant/30 p-space-md flex flex-col md:flex-row items-stretch md:items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-md">
            <div className="w-8 h-8 shrink-0 bg-surface-container-highest border border-outline-variant/40 flex items-center justify-center">
              <span className="material-symbols-outlined text-outline text-[18px]">key</span>
            </div>
            <div>
              <div className="flex items-center gap-space-sm">
                <span className="font-label-lg text-label-lg text-primary uppercase font-bold tracking-widest">MANUAL OVERRIDE CONSOLE</span>
                <span className="font-label-sm text-label-sm px-1.5 py-0.5 bg-outline-variant/20 text-outline uppercase">FALLBACK EXECUTION</span>
              </div>
              <p className="font-label-sm text-label-sm text-outline mt-0.5">
                User-signed transactions bypass autonomous agent spread rails and execute directly via Jupiter Swap routing.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-space-sm shrink-0">
            <button 
              disabled={isBuying || isSelling}
              onClick={handleManualBuy}
              className="h-9 px-space-md bg-primary hover:bg-primary-fixed-dim text-surface-container-lowest font-label-lg text-label-lg uppercase tracking-wider font-semibold transition-colors flex items-center gap-space-xs disabled:opacity-75"
            >
              <span className={`material-symbols-outlined text-[16px] ${isBuying ? 'animate-spin' : ''}`}>{isBuying ? 'sync' : 'arrow_downward'}</span>
              <span>{isBuying ? 'BROADCASTING...' : 'MANUAL BUY (JUPITER)'}</span>
            </button>
            <button 
              disabled={isBuying || isSelling}
              onClick={handleManualSell}
              className="h-9 px-space-md bg-transparent hover:bg-outline-variant/20 border border-outline-variant/40 text-on-surface font-label-lg text-label-lg uppercase tracking-wider font-semibold transition-colors flex items-center gap-space-xs disabled:opacity-75"
            >
              <span className={`material-symbols-outlined text-[16px] ${isSelling ? 'animate-spin' : ''}`}>{isSelling ? 'sync' : 'arrow_upward'}</span>
              <span>{isSelling ? 'BROADCASTING...' : 'MANUAL SELL (JUPITER)'}</span>
            </button>
          </div>
        </div>

        <div className="w-full bg-surface-container-lowest border border-outline-variant/30">
          <div className="px-space-md py-space-xs border-b border-outline-variant/20 flex items-center justify-between font-label-sm text-label-sm text-outline bg-surface-container-low">
            <div className="flex items-center gap-space-sm uppercase tracking-widest">
              <span className="w-1.5 h-1.5 bg-tertiary"></span>
              <span>OBSERVATIONAL SPREAD LOGSTREAM</span>
            </div>
            <span>AUTONOMOUS DIARY // INTERVAL 3000ms</span>
          </div>
          <div className="p-space-md flex flex-col font-body-sm text-body-sm gap-space-xs divide-y divide-outline-variant/10">
            {logs.map((log, i) => (
              <div key={i} className={`pt-space-xs ${i===0 ? 'first:pt-0 ' : ''}flex flex-col sm:flex-row sm:items-center justify-between text-outline gap-1 ${log.status === 'SIGNATURE_REQUESTED' ? 'bg-surface-container-high/40 px-2 py-1' : ''}`}>
                <div className="flex items-center gap-space-sm">
                  <span className={`${log.status === 'SIGNATURE_REQUESTED' ? 'text-primary' : 'text-tertiary'} font-label-sm text-label-sm`}>[{log.time}]</span>
                  <span className={`${log.status === 'SIGNATURE_REQUESTED' ? 'text-primary' : 'text-on-surface'}`}>SLOT {log.slot}: {log.action}</span>
                </div>
                <span className={`${log.status === 'ACTION_BLOCKED: OFF_HOURS_GATE' ? 'text-[#FFB020]' : log.status === 'SIGNATURE_REQUESTED' ? 'text-primary' : log.status.startsWith('CONF_BOUND') ? 'text-outline' : 'text-tertiary'} font-label-sm text-label-sm uppercase tracking-wider font-mono`}>
                  {log.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
