'use client';

import React from 'react';
import Link from 'next/link';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

export default function LandingPage() {
  return (
    <div className="bg-[#00132e] text-on-surface font-body-md text-body-md antialiased min-h-screen flex flex-col selection:bg-primary-container selection:text-on-primary-container">
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest border-b border-outline-variant/30">
        <div className="h-16 w-full px-margin md:px-margin flex items-center justify-between gap-4">
          <div className="flex items-center gap-space-lg">
            <div className="flex items-center gap-space-sm">
              <div className="w-2 h-2 bg-tertiary"></div>
              <span className="font-headline-md text-headline-md tracking-wider text-primary font-normal">CELXOR</span>
            </div>
            <div className="hidden lg:flex items-center gap-space-sm pl-space-lg border-l border-outline-variant/30 text-on-surface-variant font-label-sm text-label-sm tracking-widest uppercase">
              <span className="text-tertiary">OBS_STA_78°13′N</span>
              <span className="text-outline-variant">//</span>
              <span>15°38′E_SVALBARD</span>
              <span className="text-outline-variant">//</span>
              <span>SOLANA_EPOCH_742</span>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-space-lg h-full">
            <a aria-current="page" className="transition-colors font-label-md uppercase tracking-wider py-space-sm text-primary border-b border-primary" href="#">Overview</a>
            <a className="text-on-surface-variant hover:text-on-surface transition-colors font-label-md text-label-md uppercase tracking-wider py-space-sm border-b border-transparent" href="#">Autonomous Agent</a>
            <a className="text-on-surface-variant hover:text-on-surface transition-colors font-label-md text-label-md uppercase tracking-wider py-space-sm border-b border-transparent" href="#">Tokenized Equities</a>
            <a className="text-on-surface-variant hover:text-on-surface transition-colors font-label-md text-label-md uppercase tracking-wider py-space-sm border-b border-transparent" href="#">Telemetry</a>
            <a className="text-on-surface-variant hover:text-on-surface transition-colors font-label-md text-label-md uppercase tracking-wider py-space-sm border-b border-transparent" href="#">Security Proofs</a>
          </nav>
          
          <div className="flex items-center gap-space-md">
            <div className="hidden sm:flex items-center gap-space-xs px-space-sm py-1 bg-surface-container-high border border-outline-variant/30 font-label-sm text-label-sm text-on-surface-variant">
              <span className="w-1.5 h-1.5 bg-tertiary"></span>
              <span>SUB-ZERO NON-CUSTODIAL</span>
            </div>
            <WalletMultiButton style={{ height: '32px', borderRadius: '2px', backgroundColor: 'var(--color-primary)', color: 'var(--color-on-primary)', fontSize: '12px', fontWeight: 'bold', fontFamily: 'var(--font-space)' }} />
          </div>
        </div>
      </header>

      <main className="w-full pt-16 bg-[#00132e]">
        <div className="flex flex-col w-full">
          {/* SECTION 3.1: HERO (Image A) */}
          <section className="relative w-full min-h-[92vh] flex flex-col justify-between -mt-16 pt-16 overflow-hidden bg-surface-container-lowest">
            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0">
              <img alt="Arctic observatory at midnight under planetary celestial bodies with razor-sharp ice crags and fluorescent polar horizons" className="w-full h-full object-cover object-center pointer-events-none select-none" src="/images/scene_a.jpg" />
              {/* Polar Depth Scrim */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#00132e]/70 via-[#00132e]/40 to-[#00132e]"></div>
              {/* Razor Horizontal Hairline Grid */}
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_95%,rgba(138,160,200,0.06)_100%)] bg-[length:100%_48px] pointer-events-none"></div>
            </div>
            
            {/* Top Telemetry Coordinate Bar */}
            <div className="relative z-10 w-full px-margin pt-6 flex flex-wrap items-center justify-between gap-4 font-label-sm text-label-sm text-on-surface-variant border-b border-outline-variant/20 pb-3">
              <div className="flex items-center gap-space-md">
                <span className="inline-flex items-center gap-1.5 text-tertiary">
                  <span className="w-1.5 h-1.5 bg-tertiary"></span>
                  SYS_READY // EPOCH 742
                </span>
                <span className="text-outline-variant/40">|</span>
                <span>LAT 78°13′N // LON 15°38′E</span>
                <span className="text-outline-variant/40 hidden sm:inline">|</span>
                <span className="hidden sm:inline">TEMP -34.8°C BARO 1018.4 hPa</span>
              </div>
              <div className="font-label-sm text-label-sm text-primary tracking-widest uppercase">
                SOLANA_MAINNET // SUB-ZERO EXECUTION NODE
              </div>
            </div>
            
            {/* Center Monumental Title & Narrative */}
            <div className="relative z-10 w-full max-w-5xl mx-auto px-margin py-space-xl flex flex-col items-center text-center">
              <div className="inline-flex items-center gap-space-sm px-space-md py-1 mb-space-lg bg-surface-container-low/80 border border-outline-variant/30 text-on-surface-variant font-label-sm text-label-sm uppercase tracking-widest backdrop-blur-sm">
                <span className="w-1.5 h-1.5 bg-tertiary"></span>
                <span>AUTONOMOUS NON-CUSTODIAL OVERNIGHT CLEARANCE</span>
              </div>
              <h1 className="font-display-lg text-display-lg text-primary tracking-tight font-normal mb-space-md selection:bg-primary-container selection:text-on-primary-container">
                CELXOR
              </h1>
              <p className="font-headline-md text-headline-md text-on-surface max-w-2xl font-light mb-space-sm">
                A night desk for tokenized stocks you can revoke.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl font-normal mb-space-xl leading-relaxed">
                Non-custodial. Your wallet, your keys, a scoped on-chain permission the agent trades inside. Revoke in one tap.
              </p>
              
              {/* Primary Action CTA */}
              <div className="flex flex-col sm:flex-row items-center gap-space-md">
                <Link className="inline-flex items-center justify-center px-space-xl py-space-sm bg-primary text-on-primary font-title-md text-title-md uppercase tracking-wider rounded-[2px] border border-secondary-fixed hover:bg-secondary-fixed transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-primary shadow-sm" href="/desk">
                  Enter the night desk
                </Link>
              </div>
            </div>
            
            {/* Inset Horizon Barometer Footer */}
            <div className="relative z-10 w-full px-margin py-3 border-t border-outline-variant/20 flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
              <div className="flex items-center gap-space-lg">
                <span className="text-primary font-medium tracking-wider">TSK // 24/7 OVERNIGHT EQUITIES</span>
                <span className="hidden md:inline text-outline-variant/40">/</span>
                <span className="hidden md:inline font-mono">NVDAx · AAPLx · TSLAx · MSFTx · SPYx</span>
              </div>
              <div className="flex items-center gap-space-xs font-mono">
                <span className="text-tertiary">ACTIVE_ORACLES:</span>
                <span className="text-on-surface">PYTH_CORE // SWITCHBOARD</span>
              </div>
            </div>
          </section>

          {/* SECTION 3.2: THE PROBLEM */}
          <section className="w-full bg-[#00132e] py-space-xl border-b border-outline-variant/20">
            <div className="max-w-6xl mx-auto px-margin">
              {/* Section Tag */}
              <div className="flex items-center gap-space-xs text-outline font-label-sm text-label-sm uppercase tracking-widest mb-space-md">
                <span className="w-2 h-0.5 bg-outline"></span>
                <span>CHRONO_DELTA // PROBLEM ANALYSIS</span>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
                {/* Main Statement Column */}
                <div className="lg:col-span-7 flex flex-col gap-space-md">
                  <h2 className="font-headline-lg text-headline-lg text-primary font-normal leading-tight">
                    The market never sleeps.<br />You do.
                  </h2>
                  <div className="space-y-space-md text-on-surface font-body-lg text-body-lg leading-relaxed pt-space-xs">
                    <p>
                      Tokenized stocks trade 24/7 on Solana. The cash equity does not. Nobody watches the overnight spread.
                    </p>
                    <p className="text-on-surface-variant">
                      Handing a bot your keys is a trust problem, not a trading problem.
                    </p>
                  </div>
                </div>
                
                {/* Telemetry Log Terminal (Observatory Style) */}
                <div className="lg:col-span-5 bg-surface-container-low border border-outline-variant/30 rounded-[2px] p-space-md font-label-sm text-label-sm">
                  <div className="flex items-center justify-between border-b border-outline-variant/20 pb-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-tertiary"></span>
                      <span className="text-on-surface uppercase tracking-wider font-semibold">FEED // SVALBARD_DISPATCH</span>
                    </div>
                    <span className="text-outline-variant font-mono">CHANNEL_09</span>
                  </div>
                  <div className="space-y-2 font-mono leading-tight">
                    <div className="text-outline-variant">
                      [23:59:42 UTC] NYSE_CLOSE // ARBITRAGE WINDOW OPEN
                    </div>
                    <div className="text-tertiary">
                      [00:24:11 UTC] LOG // SPREAD EXPANSION MONITORED: NVDAx +142bps
                    </div>
                    <div className="text-on-surface-variant">
                      [01:12:08 UTC] SYNTH_DELTA: LIQUIDITY CONVERGENCE AT $128.40
                    </div>
                    <div className="text-outline-variant">
                      [02:40:19 UTC] RAW_METRIC // ORACLE DRIFT &lt; 0.04%
                    </div>
                    <div className="text-error bg-surface-container-highest/30 px-1 py-0.5 border border-error/20 inline-block">
                      ANOMALY REJECTED // BOT REVOCATION NOT REQUIRED
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-outline-variant/20 flex items-center justify-between text-outline">
                    <span>RES_RATE: 412ms</span>
                    <span>VERIFIED ZERO-TRUST PROTOCOL</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 3.3: THE PERMISSION (CORE PRIMITIVE) */}
          <section className="w-full bg-surface-container-lowest py-space-xl border-b border-outline-variant/20">
            <div className="max-w-6xl mx-auto px-margin">
              <div className="flex items-center gap-space-xs text-outline font-label-sm text-label-sm uppercase tracking-widest mb-space-sm">
                <span className="w-2 h-0.5 bg-tertiary"></span>
                <span>CORE SPECIFICATION // ON-CHAIN HARNESS</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-primary font-normal mb-space-xl">
                The permission is the product.
              </h2>
              
              {/* 3-Column Planar Layout */}
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-outline-variant/20 border border-outline-variant/20 rounded-[2px] bg-surface-container-low/40">
                {/* Column 1: Capped */}
                <div className="p-space-lg md:p-space-xl flex flex-col justify-between">
                  <div>
                    <div className="font-label-sm text-label-sm text-outline-variant uppercase tracking-widest mb-space-xs font-mono">
                      SPEC_01 // CONSTRAINED_NOTIONAL
                    </div>
                    <h3 className="font-title-lg text-title-lg text-primary-fixed-dim font-medium mb-space-sm">
                      Capped
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      The agent can spend only what you approve, per day, for a fixed number of days.
                    </p>
                  </div>
                  <div className="mt-space-lg pt-space-md border-t border-outline-variant/20 font-label-sm text-label-sm text-outline font-mono">
                    MAX_EXPOSURE = &lt;STATED_USDC&gt;<br />
                    RELOAD_WINDOW = 86,400s
                  </div>
                </div>
                
                {/* Column 2: Scoped */}
                <div className="p-space-lg md:p-space-xl flex flex-col justify-between">
                  <div>
                    <div className="font-label-sm text-label-sm text-outline-variant uppercase tracking-widest mb-space-xs font-mono">
                      SPEC_02 // WHITELIST_SURFACE
                    </div>
                    <h3 className="font-title-lg text-title-lg text-primary-fixed-dim font-medium mb-space-sm">
                      Scoped
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      Only the venues and assets you allow. Nothing else.
                    </p>
                  </div>
                  <div className="mt-space-lg pt-space-md border-t border-outline-variant/20 font-label-sm text-label-sm text-outline font-mono">
                    PROGRAM_WHITELIST // JUP_v6<br />
                    TARGETS // TOKEN-2022 EQUITIES
                  </div>
                </div>
                
                {/* Column 3: Revocable */}
                <div className="p-space-lg md:p-space-xl flex flex-col justify-between">
                  <div>
                    <div className="font-label-sm text-label-sm text-outline-variant uppercase tracking-widest mb-space-xs font-mono">
                      SPEC_03 // IMMEDIATE_TERMINATION
                    </div>
                    <h3 className="font-title-lg text-title-lg text-primary-fixed-dim font-medium mb-space-sm">
                      Revocable
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      One on-chain signature revokes everything. Works even if our server is down.
                    </p>
                  </div>
                  <div className="mt-space-lg pt-space-md border-t border-outline-variant/20 font-label-sm text-label-sm text-error font-mono">
                    KILL_SWITCH: LOCAL_CLIENT_SIG<br />
                    LATENCY: 1 SOLANA_SLOT (~400ms)
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 3.4: HOW IT WORKS (3 STEPS) */}
          <section className="w-full bg-[#00132e] py-space-xl border-b border-outline-variant/20">
            <div className="max-w-6xl mx-auto px-margin">
              <div className="flex items-center gap-space-xs text-outline font-label-sm text-label-sm uppercase tracking-widest mb-space-sm">
                <span className="w-2 h-0.5 bg-outline"></span>
                <span>STATE MACHINE // OPERATIONAL PHASES</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-primary font-normal mb-space-xl">
                Observe. Decide. Control.
              </h2>
              
              {/* 3 Steps Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-outline-variant/20 rounded-[2px] divide-y md:divide-y-0 md:divide-x divide-outline-variant/20">
                {/* Step 01 */}
                <div className="p-space-lg md:p-space-xl flex flex-col justify-between bg-surface-container-low/30">
                  <div>
                    <div className="w-10 h-10 mb-space-md flex items-center justify-center border border-outline-variant/40 rounded-[2px]">
                      <svg className="text-tertiary" fill="none" height="20" stroke="currentColor" strokeLinecap="square" strokeWidth="1.5" viewBox="0 0 24 24" width="20">
                        <rect height="11" width="18" x="3" y="11"></rect>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                        <circle cx="12" cy="16" r="1.5"></circle>
                      </svg>
                    </div>
                    <div className="font-label-sm text-label-sm text-outline-variant font-mono tracking-widest mb-1">
                      PHASE 01
                    </div>
                    <h3 className="font-title-lg text-title-lg text-on-surface font-medium mb-space-xs">
                      Grant
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      Sign one transaction. Set a daily cap and duration.
                    </p>
                  </div>
                  <div className="mt-space-lg text-outline font-label-sm text-label-sm font-mono pt-space-xs border-t border-outline-variant/10">
                    SPL_APPROVE(DELEGATE, $CAP)
                  </div>
                </div>
                
                {/* Step 02 */}
                <div className="p-space-lg md:p-space-xl flex flex-col justify-between bg-surface-container-low/30">
                  <div>
                    <div className="w-10 h-10 mb-space-md flex items-center justify-center border border-outline-variant/40 rounded-[2px]">
                      <svg className="text-primary-container" fill="none" height="20" stroke="currentColor" strokeLinecap="square" strokeWidth="1.5" viewBox="0 0 24 24" width="20">
                        <circle cx="12" cy="12" r="9"></circle>
                        <path d="M12 3v9l6 6"></path>
                        <path d="M12 12l-4-4"></path>
                      </svg>
                    </div>
                    <div className="font-label-sm text-label-sm text-outline-variant font-mono tracking-widest mb-1">
                      PHASE 02
                    </div>
                    <h3 className="font-title-lg text-title-lg text-on-surface font-medium mb-space-xs">
                      Agent trades
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      The agent reads Pyth and Jupiter, places orders inside your permission.
                    </p>
                  </div>
                  <div className="mt-space-lg text-outline font-label-sm text-label-sm font-mono pt-space-xs border-t border-outline-variant/10">
                    EXEC_JUP_SWAP(LIMIT, SPREAD_BOUND)
                  </div>
                </div>
                
                {/* Step 03 */}
                <div className="p-space-lg md:p-space-xl flex flex-col justify-between bg-surface-container-low/30">
                  <div>
                    <div className="w-10 h-10 mb-space-md flex items-center justify-center border border-error/40 rounded-[2px]">
                      <svg className="text-error" fill="none" height="20" stroke="currentColor" strokeLinecap="square" strokeWidth="1.5" viewBox="0 0 24 24" width="20">
                        <circle cx="12" cy="12" r="9"></circle>
                        <path d="M9 9l6 6M15 9l-6 6"></path>
                      </svg>
                    </div>
                    <div className="font-label-sm text-label-sm text-outline-variant font-mono tracking-widest mb-1">
                      PHASE 03
                    </div>
                    <h3 className="font-title-lg text-title-lg text-error font-medium mb-space-xs">
                      Kill anytime
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      Revoke on-chain. The agent goes inert.
                    </p>
                  </div>
                  <div className="mt-space-lg text-outline font-label-sm text-label-sm font-mono pt-space-xs border-t border-outline-variant/10">
                    SPL_REVOKE(DELEGATE) // HARD_INERT
                  </div>
                </div>
              </div>
              
              {/* Telemetry Observatory Log Feeds */}
              <div className="mt-space-lg bg-surface-container-lowest border border-outline-variant/30 rounded-[2px] p-space-md font-label-sm text-label-sm">
                <div className="text-outline font-mono text-xs uppercase tracking-widest mb-2 flex items-center justify-between">
                  <span>REALTIME_EXECUTION_AUDIT</span>
                  <span className="text-tertiary">ORACLE_CONVERGENCE_NOMINAL</span>
                </div>
                <div className="space-y-1.5 font-mono">
                  <div className="text-on-surface-variant flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-outline-variant/10 pb-1">
                    <span className="text-primary-container">&gt; LOOKED_AT: NVDAx</span>
                    <span>Pool 1.4% over Pyth overnight mark. Held.</span>
                    <span className="text-outline">SLOT: 37281098</span>
                  </div>
                  <div className="text-error flex flex-col sm:flex-row sm:items-center justify-between gap-1 pt-0.5">
                    <span className="text-error">&gt; BROADCAST: ON_CHAIN_REVOKE</span>
                    <span className="text-on-surface">Revoke landed in slot 37281104. Delegate is inert.</span>
                    <span className="text-error">LATENCY: 384ms</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 3.5: WHY SOLANA */}
          <section className="w-full bg-surface-container-lowest py-space-xl border-b border-outline-variant/20">
            <div className="max-w-6xl mx-auto px-margin">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
                <div className="lg:col-span-5 flex flex-col gap-space-sm">
                  <div className="flex items-center gap-space-xs text-outline font-label-sm text-label-sm uppercase tracking-widest">
                    <span className="w-2 h-0.5 bg-primary"></span>
                    <span>SUB-ZERO L1 SETTLEMENT</span>
                  </div>
                  <h2 className="font-headline-lg text-headline-lg text-primary font-normal">
                    Built on Solana.
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Token-2022 scaled UI for dividends and splits. Jupiter for deep liquidity. Pyth equity feeds for off-hours marks. SPL approvals as real, revocable permissions.
                  </p>
                  <div className="mt-space-md p-space-sm bg-surface-container-high/40 border border-outline-variant/20 text-on-surface font-label-sm text-label-sm">
                    <span className="text-tertiary font-mono">100% NON-CUSTODIAL:</span> Celxor retains zero withdrawal authorities or private signing credentials.
                  </div>
                </div>
                
                {/* Telemetry Breakdown Table */}
                <div className="lg:col-span-7 border border-outline-variant/20 rounded-[2px] overflow-hidden">
                  <div className="bg-surface-container-high/60 px-space-md py-2 border-b border-outline-variant/20 flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant font-mono">
                    <span>PRIMITIVE</span>
                    <span>OBSERVATORY INTEGRATION SPEC</span>
                    <span>STATUS</span>
                  </div>
                  <div className="divide-y divide-outline-variant/20 font-label-sm text-label-sm bg-surface-container-low/20">
                    <div className="px-space-md py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <span className="font-mono text-primary font-medium">Token-2022</span>
                        <span className="block text-outline text-xs">Extensions Standard</span>
                      </div>
                      <div className="text-on-surface font-mono">
                        Transfer fees, interest-bearing tokens, corporate splits
                      </div>
                      <div className="text-tertiary font-mono uppercase text-xs">VERIFIED</div>
                    </div>
                    
                    <div className="px-space-md py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <span className="font-mono text-primary font-medium">Pyth Core</span>
                        <span className="block text-outline text-xs">High-Frequency Equity Oracles</span>
                      </div>
                      <div className="text-on-surface font-mono">
                        Off-hours confidence intervals &amp; cash-market benchmarks
                      </div>
                      <div className="text-tertiary font-mono uppercase text-xs">SUB-400MS</div>
                    </div>
                    
                    <div className="px-space-md py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <span className="font-mono text-primary font-medium">Jupiter v6</span>
                        <span className="block text-outline text-xs">Routing Aggregator</span>
                      </div>
                      <div className="text-on-surface font-mono">
                        Direct liquidity routing with strict price-slippage thresholds
                      </div>
                      <div className="text-tertiary font-mono uppercase text-xs">ENGAGED</div>
                    </div>
                    
                    <div className="px-space-md py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <span className="font-mono text-primary font-medium">SPL Delegation</span>
                        <span className="block text-outline text-xs">On-Chain Permission Primitive</span>
                      </div>
                      <div className="text-on-surface font-mono">
                        Autonomous spending approvals revocable by master key
                      </div>
                      <div className="text-tertiary font-mono uppercase text-xs">HARD-ENFORCED</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 3.6: FINAL CTA (Image B cropped panel) */}
          <section className="relative w-full py-space-xl bg-[#00132e] border-b border-outline-variant/20 overflow-hidden" id="night-desk">
            <div className="max-w-6xl mx-auto px-margin">
              <div className="relative w-full rounded-[2px] border border-outline-variant/30 overflow-hidden bg-surface-container-lowest">
                {/* Image B Background Header Slice */}
                <div className="relative w-full h-48 md:h-64 overflow-hidden border-b border-outline-variant/20">
                  <img alt="Arctic lunar mountain range across frozen deep sea fjord at polar dusk" className="w-full h-full object-cover object-center filter brightness-75" src="/images/scene_b.jpg" />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/30 to-transparent"></div>
                  
                  <div className="absolute top-3 left-4 font-label-sm text-label-sm text-primary font-mono bg-surface-container-lowest/80 px-2 py-0.5 border border-outline-variant/30">
                    RADAR_STATION // SVALBARD ARCH 01
                  </div>
                  <div className="absolute bottom-3 right-4 font-label-sm text-label-sm text-tertiary font-mono hidden sm:block">
                    EPOCH_ACTIVE: 742 // REPOSITORIES_SYNCED
                  </div>
                </div>
                
                {/* Panel Callout & CTA Controls */}
                <div className="p-space-lg md:p-space-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-space-lg">
                  <div className="flex flex-col gap-space-xs">
                    <span className="font-label-sm text-label-sm text-outline uppercase tracking-widest font-mono">
                      STATION_READY // ZERO-CUSTODY ENVIRONMENT
                    </span>
                    <h2 className="font-headline-lg text-headline-lg text-primary font-normal">
                      The night desk is open.
                    </h2>
                    <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
                      Initialize scoped delegate permissions. Trade synthetic equities across Tokyo, London, and New York off-hours without granting custodianship.
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <Link className="inline-flex items-center justify-center px-space-xl py-space-sm bg-primary text-on-primary font-title-md text-title-md uppercase tracking-wider rounded-[2px] border border-secondary-fixed hover:bg-secondary-fixed transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-primary shadow-sm" href="/desk">
                      Enter the night desk
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 3.7: FOOTER */}
          <footer className="w-full bg-[#000e25] py-space-lg border-t border-outline-variant/20">
            <div className="max-w-6xl mx-auto px-margin flex flex-col sm:flex-row items-center justify-between gap-space-md font-label-sm text-label-sm text-on-surface-variant font-mono">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-tertiary"></span>
                <span>Celxor — Stocklana 2026. Non-custodial. Not financial advice.</span>
              </div>
              <div className="flex items-center gap-space-lg">
                <a className="hover:text-primary transition-colors uppercase tracking-wider underline underline-offset-4 decoration-outline-variant/40 hover:decoration-primary" href="#">
                  GitHub
                </a>
                <span className="text-outline-variant/40">/</span>
                <a className="hover:text-primary transition-colors uppercase tracking-wider underline underline-offset-4 decoration-outline-variant/40 hover:decoration-primary" href="#">
                  Docs
                </a>
              </div>
            </div>
          </footer>
        </div>
      </main>

      <footer className="w-full bg-surface-container-lowest border-t border-outline-variant/30 mt-auto">
        <div className="w-full px-margin py-space-lg">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-space-lg pb-space-lg border-b border-outline-variant/20">
            <div className="flex flex-col gap-space-xs">
              <div className="flex items-center gap-space-xs">
                <span className="w-2 h-2 bg-primary"></span>
                <span className="font-headline-md text-headline-md text-primary">CELXOR</span>
              </div>
              <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mt-space-xs">
                Polar Deep-Observation AI Protocol for Non-Custodial Synthetic Equity Clearance.
              </p>
            </div>
            
            <div className="flex flex-col gap-space-xs font-label-sm text-label-sm">
              <span className="text-on-surface font-semibold uppercase tracking-wider">OBSERVATORY NETWORK</span>
              <span className="text-on-surface-variant">Svalbard Base Arch 01</span>
              <span className="text-on-surface-variant">Solana Mainnet L1 Settlement</span>
              <span className="text-on-surface-variant">Pyth &amp; Switchboard Feeds</span>
            </div>
            
            <div className="flex flex-col gap-space-xs font-label-sm text-label-sm">
              <span className="text-on-surface font-semibold uppercase tracking-wider">TELEMETRY LOGS</span>
              <span className="text-on-surface-variant">Agent Execution Proofs</span>
              <span className="text-on-surface-variant">On-Chain Vault Reserve (100%)</span>
              <span className="text-on-surface-variant">Latency: 412ms Polar Relay</span>
            </div>
            
            <div className="flex flex-col gap-space-xs font-label-sm text-label-sm">
              <span className="text-on-surface font-semibold uppercase tracking-wider">SYSTEM STATUS</span>
              <div className="flex items-center gap-space-xs text-tertiary">
                <span className="w-1.5 h-1.5 bg-tertiary"></span>
                <span>ALL STATIONS NOMINAL</span>
              </div>
              <span className="text-on-surface-variant">ENCRYPTION: HARDWARE ENCLAVE</span>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-space-sm pt-space-md font-label-sm text-label-sm text-on-surface-variant">
            <div className="flex items-center gap-space-md">
              <span>EXPEDITION PROTOCOL // EST. 2025</span>
              <span>COORDINATES: 78°13′N 15°38′E</span>
            </div>
            <div>
              <span>NON-CUSTODIAL SOLANA AGENT // STRICT VERIFICATION REQUIRED</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
