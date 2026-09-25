import React, { useState } from 'react';
import type { ViewState } from './Header';

export function DeskView({ setView }: { setView: (view: ViewState) => void }) {
  const [isScanning, setIsScanning] = useState(false);
  const [isArmed, setIsArmed] = useState(true);
  const [tickerText, setTickerText] = useState('Latest agent evaluation: Looked at NVDAx. Pool 1.4% over Pyth overnight mark. Held. · Slot 37,281,104');

  const triggerAgentScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      const slot = Math.floor(37281104 + Math.random() * 80);
      setTickerText(`Evaluated 4 pairs against Pyth mark at slot #${slot}. Overnight variance within mandate limits (0.18%). All positions held.`);
      setIsScanning(false);
    }, 750);
  };

  return (
    <div className="flex flex-col w-full">
      {/* SCENE HEADER ART: Polar Night Horizon */}
      <div className="relative w-full h-[38vh] min-h-[300px] max-h-[460px] overflow-hidden -mt-16 bg-surface-container-lowest">
        <img alt="Quiet violet mountain range under a pale moon with reflective dark icy water" className="w-full h-full object-cover object-bottom select-none pointer-events-none" src="/images/scene_b.jpg" />
        
        <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/30 to-surface-container-lowest/60"></div>
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-surface-container-lowest to-transparent"></div>
        
        <div className="absolute top-20 right-margin flex items-center gap-space-sm z-20">
          <div className="flex items-center gap-space-xs bg-surface-container-lowest px-space-sm py-space-xs border border-outline-variant/40">
            {isArmed ? (
              <>
                <span className="text-tertiary text-[10px] leading-none select-none">●</span>
                <span className="font-label-sm text-label-sm text-on-surface tracking-widest font-bold">ARMED</span>
              </>
            ) : (
              <>
                <span className="text-outline text-[10px] leading-none select-none">■</span>
                <span className="font-label-sm text-label-sm text-outline tracking-widest font-bold">IDLE</span>
              </>
            )}
          </div>
          <div className="hidden sm:flex items-center bg-surface-container-lowest/80 px-space-sm py-space-xs border border-outline-variant/30 font-label-sm text-label-sm text-outline">
            <span className="tracking-wider">PULSE: 400ms</span>
          </div>
        </div>
        
        <div className="absolute bottom-6 left-margin right-margin flex flex-col md:flex-row md:items-end justify-between gap-space-sm z-20">
          <div className="flex flex-col">
            <span className="font-label-sm text-label-sm text-outline tracking-[0.2em] uppercase mb-space-xs">
              STATION 04 // 68°21'N · AUTONOMOUS DELEGATE ACTIVE
            </span>
            <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">
              Night Desk
            </h1>
          </div>
          <div className="flex items-center gap-space-md font-body-sm text-body-sm text-outline-variant">
            <span className="text-outline">POLAR EPHEMERIS: <span className="text-on-surface">SYNCHRONIZED</span></span>
            <span className="hidden lg:inline text-outline-variant">|</span>
            <span className="hidden lg:inline text-outline">ORACLE REFRESH: <span className="text-tertiary font-medium">SLOT #37,281,104</span></span>
          </div>
        </div>
      </div>

      {/* GROUND PLANE */}
      <div className="w-full bg-surface-container-lowest px-margin flex flex-col">
        <section className="w-full border-y border-outline-variant/20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-outline-variant/20">
          {/* Metric 1 */}
          <div className="p-space-md flex flex-col justify-between bg-surface-container-lowest">
            <div className="flex items-center justify-between mb-space-xs">
              <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">DAILY SPEND REMAINING</span>
              <span className="font-label-sm text-label-sm text-outline">42.8%</span>
            </div>
            <div className="font-body-lg text-body-lg text-on-surface font-medium tabular-nums tracking-tight">
              4,280.00 <span className="font-label-sm text-label-sm text-outline">/ 10,000.00 USDC</span>
            </div>
            <div className="w-full bg-surface-variant/30 h-0.5 mt-space-sm overflow-hidden">
              <div className="bg-primary h-full w-[42.8%]"></div>
            </div>
          </div>
          
          {/* Metric 2 */}
          <div className="p-space-md flex flex-col justify-between bg-surface-container-lowest">
            <div className="flex items-center justify-between mb-space-xs">
              <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">ESCROWED / MANAGED</span>
              <span className="font-label-sm text-label-sm text-tertiary">VAULT A</span>
            </div>
            <div className="font-body-lg text-body-lg text-primary font-medium tabular-nums tracking-tight">
              $148,920.45 <span className="font-label-sm text-label-sm text-outline">USDC</span>
            </div>
            <div className="font-body-sm text-body-sm text-outline mt-space-xs">
              Across 4 Tokenized Issuances
            </div>
          </div>
          
          {/* Metric 3 */}
          <div className="p-space-md flex flex-col justify-between bg-surface-container-lowest">
            <div className="flex items-center justify-between mb-space-xs">
              <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">ACTIVE MANDATE</span>
              <span className="font-label-sm text-label-sm text-outline">EXP: 14D</span>
            </div>
            <div className="font-body-md text-body-md text-on-surface tracking-tight">
              Calm · Slot 37,281,090
            </div>
            <div className="font-body-sm text-body-sm text-outline mt-space-xs">
              Overnight Drift Cap ±2.2%
            </div>
          </div>
          
          {/* Metric 4 */}
          <div className="p-space-md flex flex-col justify-between gap-space-sm bg-surface-container-lowest">
            <div className="flex items-center justify-between">
              <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">MANUAL INTERVENTION</span>
              <span className="w-1.5 h-1.5 bg-tertiary"></span>
            </div>
            <div className="flex items-center gap-space-sm">
              <button 
                onClick={triggerAgentScan} 
                disabled={isScanning}
                className="flex-1 h-8 bg-primary hover:bg-primary-fixed text-on-primary font-label-sm text-label-sm tracking-widest uppercase transition-colors flex items-center justify-center gap-space-xs active:translate-y-px disabled:opacity-75"
              >
                <span className={`material-symbols-outlined text-[14px] ${isScanning ? 'animate-spin' : ''}`}>
                  {isScanning ? 'refresh' : 'radar'}
                </span>
                <span>{isScanning ? 'SCANNING' : 'LOOK NOW'}</span>
              </button>
              <button className="h-8 px-space-sm border border-outline-variant/30 hover:border-primary text-on-surface hover:text-primary font-label-sm text-label-sm tracking-wider uppercase transition-colors flex items-center justify-center whitespace-nowrap">
                LEDGER
              </button>
            </div>
          </div>
        </section>

        {/* SECTION TITLE & RETICLE COORDINATES */}
        <div className="py-space-md flex items-center justify-between border-b border-outline-variant/20">
          <div className="flex items-center gap-space-sm">
            <span className="font-label-md text-label-md text-primary tracking-widest uppercase">HOLDINGS INDEX</span>
            <span className="text-outline-variant text-[10px]">///</span>
            <span className="font-label-sm text-label-sm text-outline uppercase">BACKED FINANCE SYNTHETICS</span>
          </div>
          <div className="font-label-sm text-label-sm text-outline tracking-wider flex items-center gap-space-md">
            <span>REF: SOL-PYTH-OCT</span>
            <span className="hidden sm:inline text-outline-variant">|</span>
            <span className="hidden sm:inline">SETTLEMENT: USDC</span>
          </div>
        </div>

        {/* HOLDINGS MATRIX */}
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[840px]">
            <thead>
              <tr className="border-b border-outline-variant/30 font-label-sm text-label-sm text-outline uppercase">
                <th className="py-space-sm px-space-xs font-normal tracking-wider">SYMBOL</th>
                <th className="py-space-sm px-space-xs font-normal tracking-wider">ISSUER</th>
                <th className="py-space-sm px-space-xs font-normal tracking-wider text-right">POSITION</th>
                <th className="py-space-sm px-space-xs font-normal tracking-wider text-right">PRICE (PYTH)</th>
                <th className="py-space-sm px-space-xs font-normal tracking-wider text-right">VALUE (USDC)</th>
                <th className="py-space-sm px-space-xs font-normal tracking-wider text-right">24H P&L</th>
                <th className="py-space-sm px-space-xs font-normal tracking-wider text-center">STATUS</th>
                <th className="py-space-sm px-space-xs font-normal tracking-wider text-right">ACTION</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/15 font-body-sm text-body-sm">
              <tr className="hover:bg-surface-container-low transition-colors group">
                <td className="py-space-sm px-space-xs font-medium text-primary flex items-center gap-space-xs">
                  <span className="w-1 h-3 bg-tertiary"></span>
                  <span className="tracking-wide">AAPLx</span>
                </td>
                <td className="py-space-sm px-space-xs text-outline">Backed Finance</td>
                <td className="py-space-sm px-space-xs text-right tabular-nums text-on-surface">142.500000 <span className="text-outline text-[10px]">AAPLx</span></td>
                <td className="py-space-sm px-space-xs text-right tabular-nums text-on-surface">$224.18</td>
                <td className="py-space-sm px-space-xs text-right tabular-nums text-on-surface font-medium">$31,945.65</td>
                <td className="py-space-sm px-space-xs text-right tabular-nums text-tertiary">+$412.30 (+1.31%)</td>
                <td className="py-space-sm px-space-xs text-center">
                  <span className="inline-block px-1.5 py-0.5 border border-tertiary/40 text-tertiary font-label-sm text-label-sm uppercase">Holding</span>
                </td>
                <td className="py-space-sm px-space-xs text-right">
                  <button onClick={() => setView('STOCK')} className="text-outline hover:text-primary transition-colors font-label-sm text-label-sm uppercase underline decoration-outline-variant/50">AUDIT</button>
                </td>
              </tr>
              
              <tr className="hover:bg-surface-container-low transition-colors group">
                <td className="py-space-sm px-space-xs font-medium text-primary flex items-center gap-space-xs">
                  <span className="w-1 h-3 bg-secondary"></span>
                  <span className="tracking-wide">NVDAx</span>
                </td>
                <td className="py-space-sm px-space-xs text-outline">Backed Finance</td>
                <td className="py-space-sm px-space-xs text-right tabular-nums text-on-surface">85.000000 <span className="text-outline text-[10px]">NVDAx</span></td>
                <td className="py-space-sm px-space-xs text-right tabular-nums text-on-surface">$128.40</td>
                <td className="py-space-sm px-space-xs text-right tabular-nums text-on-surface font-medium">$10,914.00</td>
                <td className="py-space-sm px-space-xs text-right tabular-nums text-error">-$84.20 (-0.76%)</td>
                <td className="py-space-sm px-space-xs text-center">
                  <span className="inline-block px-1.5 py-0.5 border border-outline-variant text-outline font-label-sm text-label-sm uppercase">Observing spread</span>
                </td>
                <td className="py-space-sm px-space-xs text-right">
                  <button onClick={() => setView('STOCK')} className="text-outline hover:text-primary transition-colors font-label-sm text-label-sm uppercase underline decoration-outline-variant/50">AUDIT</button>
                </td>
              </tr>
              
              <tr className="hover:bg-surface-container-low transition-colors group">
                <td className="py-space-sm px-space-xs font-medium text-primary flex items-center gap-space-xs">
                  <span className="w-1 h-3 bg-tertiary"></span>
                  <span className="tracking-wide">TSLAx</span>
                </td>
                <td className="py-space-sm px-space-xs text-outline">Backed Finance</td>
                <td className="py-space-sm px-space-xs text-right tabular-nums text-on-surface">95.250000 <span className="text-outline text-[10px]">TSLAx</span></td>
                <td className="py-space-sm px-space-xs text-right tabular-nums text-on-surface">$256.80</td>
                <td className="py-space-sm px-space-xs text-right tabular-nums text-on-surface font-medium">$24,460.20</td>
                <td className="py-space-sm px-space-xs text-right tabular-nums text-tertiary">+$890.10 (+3.78%)</td>
                <td className="py-space-sm px-space-xs text-center">
                  <span className="inline-block px-1.5 py-0.5 border border-tertiary/40 text-tertiary font-label-sm text-label-sm uppercase">Holding</span>
                </td>
                <td className="py-space-sm px-space-xs text-right">
                  <button onClick={() => setView('STOCK')} className="text-outline hover:text-primary transition-colors font-label-sm text-label-sm uppercase underline decoration-outline-variant/50">AUDIT</button>
                </td>
              </tr>
              
              <tr className="hover:bg-surface-container-low transition-colors group">
                <td className="py-space-sm px-space-xs font-medium text-primary flex items-center gap-space-xs">
                  <span className="w-1 h-3 bg-tertiary"></span>
                  <span className="tracking-wide">MSFTx</span>
                </td>
                <td className="py-space-sm px-space-xs text-outline">Backed Finance</td>
                <td className="py-space-sm px-space-xs text-right tabular-nums text-on-surface">60.000000 <span className="text-outline text-[10px]">MSFTx</span></td>
                <td className="py-space-sm px-space-xs text-right tabular-nums text-on-surface">$448.20</td>
                <td className="py-space-sm px-space-xs text-right tabular-nums text-on-surface font-medium">$26,892.00</td>
                <td className="py-space-sm px-space-xs text-right tabular-nums text-tertiary">+$120.40 (+0.45%)</td>
                <td className="py-space-sm px-space-xs text-center">
                  <span className="inline-block px-1.5 py-0.5 border border-tertiary/40 text-tertiary font-label-sm text-label-sm uppercase">Holding</span>
                </td>
                <td className="py-space-sm px-space-xs text-right">
                  <button onClick={() => setView('STOCK')} className="text-outline hover:text-primary transition-colors font-label-sm text-label-sm uppercase underline decoration-outline-variant/50">AUDIT</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* LOWER TELEMETRY DUAL PANELS */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 border-t border-outline-variant/20 mt-space-md">
          {/* Left Panel */}
          <div className="lg:col-span-8 py-space-md lg:pr-space-md border-b lg:border-b-0 lg:border-r border-outline-variant/20 flex flex-col gap-space-xs">
            <div className="flex items-center justify-between mb-space-xs">
              <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">EXECUTION BUFFER LOG</span>
              <span className="font-label-sm text-label-sm text-tertiary">STREAM // VERIFIED</span>
            </div>
            <div className="bg-surface-container-low p-space-sm border border-outline-variant/20 font-body-sm text-body-sm flex flex-col gap-space-xs leading-relaxed">
              <div className="flex items-start gap-space-sm">
                <span className="text-outline shrink-0">04:18:22 UTC</span>
                <span className="text-secondary shrink-0">[SLOT 37,281,104]</span>
                <span className="text-on-surface">Looked at NVDAx. Pool 1.4% over Pyth overnight mark. Threshold not breached. Order suppressed.</span>
              </div>
              <div className="flex items-start gap-space-sm text-outline">
                <span className="shrink-0">04:17:40 UTC</span>
                <span className="shrink-0">[SLOT 37,281,002]</span>
                <span>AAPLx price tick confirmed: $224.18 (Pyth cluster 99.8% cert). Balance delta +0.00 USDC.</span>
              </div>
              <div className="flex items-start gap-space-sm text-outline">
                <span className="shrink-0">04:16:11 UTC</span>
                <span className="shrink-0">[SLOT 37,280,891]</span>
                <span>Epoch reconciliation cycle complete. All 4 tokens pegged to autonomous custodian.</span>
              </div>
            </div>
          </div>
          
          {/* Right Panel */}
          <div className="lg:col-span-4 py-space-md lg:pl-space-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-space-xs">
                <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">DELEGATE SANITY TEST</span>
                <span className="font-label-sm text-label-sm text-tertiary">0 ERRORS</span>
              </div>
              <div className="space-y-space-xs font-body-sm text-body-sm text-outline">
                <div className="flex justify-between py-0.5 border-b border-outline-variant/10">
                  <span>ORACLE HEURISTIC</span>
                  <span className="text-on-surface">PYTH NETWORK V2</span>
                </div>
                <div className="flex justify-between py-0.5 border-b border-outline-variant/10">
                  <span>KEEPER THREAD</span>
                  <span className="text-on-surface">SVALBARD-ARRAY-01</span>
                </div>
                <div className="flex justify-between py-0.5 border-b border-outline-variant/10">
                  <span>LATENCY DEVIATION</span>
                  <span className="text-tertiary">22ms (NOMINAL)</span>
                </div>
              </div>
            </div>
            <div className="pt-space-md flex items-center justify-between">
              <span className="font-label-sm text-label-sm text-outline uppercase">STATION COLD RUNNER</span>
              <span className="font-label-sm text-label-sm text-primary tracking-widest">ID: 8xK4-NVDA-NIGHT</span>
            </div>
          </div>
        </div>
        
        {/* BOTTOM STATUS TICKER & EMERGENCY ARM */}
        <footer className="w-full border-t border-outline-variant/20 py-space-sm my-space-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-sm bg-surface-container-lowest">
          <div className="flex items-center gap-space-sm overflow-hidden">
            <span className="w-2 h-2 bg-tertiary shrink-0"></span>
            <div className="font-body-sm text-body-sm text-on-surface-variant truncate">
              {tickerText}
            </div>
          </div>
          <div className="shrink-0 flex items-center gap-space-md">
            <button onClick={() => setIsArmed(!isArmed)} className="font-label-sm text-label-sm text-outline hover:text-on-surface uppercase tracking-wider transition-colors" type="button">
              [ TOGGLE AGENT ]
            </button>
            <button onClick={() => setView('KILL')} className="font-label-sm text-label-sm text-error hover:bg-error hover:text-on-error border border-error/50 px-space-sm py-1 uppercase tracking-widest transition-colors font-bold">
              EMERGENCY KILL SWITCH
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}
