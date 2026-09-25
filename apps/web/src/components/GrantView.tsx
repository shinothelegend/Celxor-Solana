import React, { useState } from 'react';
import type { ViewState } from './Header';
import { useWallet } from '@solana/wallet-adapter-react';
import bs58 from 'bs58';

export function GrantView({ setView }: { setView: (view: ViewState) => void }) {
  const { publicKey, signMessage } = useWallet();
  const [spendCap, setSpendCap] = useState('10,000.00');
  const [signState, setSignState] = useState<'idle' | 'signing' | 'done'>('idle');

  const handleSpendCapChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/[^0-9.]/g, '');
    setSpendCap(val);
  };

  const handleSign = async () => {
    if (!publicKey || !signMessage) {
      alert("Please connect your Solana wallet first in the top right.");
      return;
    }
    
    try {
      setSignState('signing');
      const message = new TextEncoder().encode(`CELXOR_DELEGATE_GRANT\nCAP:${spendCap}\nDURATION:30_DAYS\nNON_CUSTODIAL_APPROVAL`);
      const signature = await signMessage(message);
      console.log('Granted signature:', bs58.encode(signature));
      
      setSignState('done');
      setTimeout(() => {
        setView('DESK');
      }, 1500);
    } catch (err) {
      console.error(err);
      setSignState('idle');
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* Atmospheric Horizon Hero Header */}
      <section className="relative w-full h-[389px] min-h-[300px] overflow-hidden flex flex-col justify-end bg-surface-container-lowest -mt-16">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/scene_a.jpg')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/60 to-transparent"></div>
        <div className="absolute inset-0 bg-surface-container-lowest/20"></div>
        
        {/* Telemetry Rulers & Grid Coordinate Overlay */}
        <div className="absolute top-20 left-margin right-margin flex items-center justify-between text-outline font-label-sm text-label-sm tracking-widest uppercase pointer-events-none">
          <div className="flex items-center gap-space-sm">
            <span className="w-1.5 h-1.5 bg-tertiary inline-block"></span>
            <span>SECTOR 04 // POLAR EXPEDITION APPARATUS</span>
          </div>
          <div className="flex items-center gap-space-md">
            <span>RADIAL: 78°13'42"N</span>
            <span className="opacity-40">/</span>
            <span>OPTICAL APERTURE: 1400MM</span>
          </div>
        </div>
        
        {/* Horizon Text Plane */}
        <div className="relative z-10 px-margin pb-space-lg w-full max-w-[1440px] mx-auto flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <div className="flex flex-col">
            <div className="flex items-center gap-space-xs font-label-sm text-label-sm text-tertiary tracking-widest uppercase mb-1">
              <span className="inline-block w-2 h-px bg-tertiary"></span>
              <span>DELEGATE PROTOCOL // APPROVECHECKED SPL MULTIPLEX</span>
            </div>
            <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Grant Permission</h1>
          </div>
          <div className="flex items-center gap-space-lg text-outline font-label-sm text-label-sm">
            <div className="flex flex-col">
              <span className="text-on-surface-variant font-body-sm text-body-sm">EXPEDITION ROOT</span>
              <span className="tracking-widest">SVALBARD ARRAY II</span>
            </div>
            <div className="w-px h-8 bg-outline-variant/30"></div>
            <div className="flex flex-col">
              <span className="text-on-surface-variant font-body-sm text-body-sm">AUTH STATUS</span>
              <span className="text-tertiary tracking-widest">READY_FOR_ATTESTATION</span>
            </div>
          </div>
        </div>
        
        <div className="w-full h-px bg-outline-variant/30"></div>
      </section>

      {/* Observational Ground Plane */}
      <section className="w-full px-margin py-space-xl max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col gap-space-xl">
            <div className="flex flex-col gap-space-xs">
              <div className="flex items-center justify-between font-label-sm text-label-sm text-outline tracking-widest uppercase">
                <span>PARAMETER ENVELOPE</span>
                <span>SPEC: RFC-8802/SPL-22</span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Establish autonomous on-chain execution boundaries for Celxor Agent. You retain sovereign custody; permissions can be revoked instantaneously in any slot.
              </p>
            </div>
            
            <div className="flex flex-col gap-space-lg">
              {/* Daily Cap */}
              <div className="flex flex-col gap-space-xs">
                <div className="flex items-center justify-between">
                  <label className="font-label-lg text-label-lg text-on-surface tracking-wider uppercase" htmlFor="spend-cap">
                    DAILY SPEND CAP (USDC)
                  </label>
                  <span className="font-label-sm text-label-sm text-outline tracking-widest">RESET_CYCLE: 86,400S</span>
                </div>
                <div className="relative flex items-center bg-surface-container-lowest border border-outline-variant/30 focus-within:border-primary">
                  <span className="pl-space-md font-body-md text-body-md text-outline">$</span>
                  <input 
                    className="w-full py-space-sm px-space-sm bg-transparent text-right font-body-lg text-body-lg text-on-surface outline-none tabular-nums" 
                    id="spend-cap" 
                    spellCheck="false" 
                    type="text" 
                    value={spendCap}
                    onChange={handleSpendCapChange}
                  />
                  <span className="pr-space-md pl-space-xs font-label-md text-label-md text-outline tracking-wider">USDC</span>
                </div>
                <p className="font-body-sm text-body-sm text-outline">
                  Reset every 86,400 seconds on-chain. Unused quotas collapse at epoch boundary.
                </p>
              </div>
              
              {/* Duration Input */}
              <div className="flex flex-col gap-space-xs">
                <div className="flex items-center justify-between">
                  <label className="font-label-lg text-label-lg text-on-surface tracking-wider uppercase" htmlFor="mandate-duration">
                    MANDATE DURATION
                  </label>
                  <span className="font-label-sm text-label-sm text-outline tracking-widest">RANGE: 1-90 DAYS</span>
                </div>
                <div className="relative flex items-center bg-surface-container-lowest border border-outline-variant/30 focus-within:border-primary">
                  <input className="w-full py-space-sm px-space-md bg-transparent text-right font-body-lg text-body-lg text-on-surface outline-none tabular-nums" id="mandate-duration" max="90" min="1" type="number" defaultValue="30" />
                  <span className="pr-space-md pl-space-xs font-label-md text-label-md text-outline tracking-wider uppercase">DAYS</span>
                </div>
                <p className="font-body-sm text-body-sm text-outline">
                  Expires automatically at Slot #39,873,600 if no reaffirmation pulse is broadcast.
                </p>
              </div>
              
              {/* Risk Profile Selector */}
              <div className="flex flex-col gap-space-sm">
                <span className="font-label-lg text-label-lg text-on-surface tracking-wider uppercase">
                  RISK PROFILE MATRICES
                </span>
                <div aria-label="Risk Profile Selection" className="flex flex-col gap-space-xs" role="radiogroup">
                  <label className="group relative flex items-start gap-space-md p-space-md bg-surface-container-lowest border border-outline-variant/30 hover:border-outline transition-colors cursor-pointer">
                    <input className="sr-only peer" name="risk-profile" type="radio" value="calm" />
                    <div className="w-3.5 h-3.5 mt-0.5 border border-outline peer-checked:border-tertiary flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-tertiary hidden peer-checked:block"></div>
                    </div>
                    <div className="flex flex-col min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-label-lg text-label-lg text-on-surface uppercase tracking-wider">Calm</span>
                        <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">DEV &lt; 0.20%</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                        Pyth mark divergence &lt; 0.2%, US market regular exchange hours only. Minimal exposure envelope.
                      </p>
                    </div>
                  </label>
                  
                  <label className="group relative flex items-start gap-space-md p-space-md bg-surface-container-lowest border border-primary/60 hover:border-primary transition-colors cursor-pointer">
                    <input defaultChecked className="sr-only peer" name="risk-profile" type="radio" value="balanced" />
                    <div className="w-3.5 h-3.5 mt-0.5 border border-primary flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-primary block"></div>
                    </div>
                    <div className="flex flex-col min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-label-lg text-label-lg text-primary uppercase tracking-wider font-bold">Balanced</span>
                        <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider">RECOMMENDED</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface mt-0.5">
                        Pyth overnight mark max 0.8% spread, liquidity buffer 3x depth requirement. High-probability clearing.
                      </p>
                    </div>
                  </label>
                  
                  <label className="group relative flex items-start gap-space-md p-space-md bg-surface-container-lowest border border-outline-variant/30 hover:border-outline transition-colors cursor-pointer">
                    <input className="sr-only peer" name="risk-profile" type="radio" value="sharp" />
                    <div className="w-3.5 h-3.5 mt-0.5 border border-outline peer-checked:border-tertiary flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-tertiary hidden peer-checked:block"></div>
                    </div>
                    <div className="flex flex-col min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-label-lg text-label-lg text-on-surface uppercase tracking-wider">Sharp</span>
                        <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">CEILING 1.80%</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                        Extended astronomical hours permitted, max 1.8% pool slippage ceiling. Autonomous arbitrage enabled.
                      </p>
                    </div>
                  </label>
                </div>
              </div>
              
              {/* Execution CTA */}
              <div className="pt-space-sm flex flex-col gap-space-xs">
                <button 
                  onClick={handleSign}
                  disabled={signState !== 'idle'}
                  className={`w-full py-space-md font-label-lg text-label-lg uppercase tracking-widest font-bold transition-colors text-center ${
                    signState === 'idle' 
                      ? 'bg-primary hover:bg-primary-fixed text-on-primary active:scale-[0.99]' 
                      : signState === 'signing'
                      ? 'bg-primary/50 text-on-primary opacity-75 cursor-not-allowed'
                      : 'bg-tertiary text-surface-container-lowest'
                  }`}
                  type="button"
                >
                  {signState === 'idle' ? 'Sign Grant via Privy' : signState === 'signing' ? 'TRANSMITTING INSTRUCTION...' : 'SOVEREIGN DELEGATION ACTIVE'}
                </button>
                <div className="flex items-center justify-between font-label-sm text-label-sm text-outline px-space-xs">
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-outline text-[14px]">lock</span>
                    Zero private key disclosure
                  </span>
                  <span>GAS SUBSIDIZED: CELXOR RELAY</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column: Grant Summary & Verifiable Guarantees */}
          <div className="lg:col-span-5 flex flex-col gap-space-lg">
            <div className="border border-outline-variant/30 bg-surface-container-lowest p-space-lg flex flex-col gap-space-md">
              <div className="flex items-center justify-between border-b border-outline-variant/30 pb-space-sm">
                <span className="font-headline-sm text-headline-sm text-on-surface">MANDATE SUMMARY</span>
                <span className="font-label-sm text-label-sm text-tertiary uppercase tracking-wider">VERIFIED DELEGATION</span>
              </div>
              <div className="flex flex-col gap-space-sm py-space-xs">
                <div className="flex items-baseline justify-between border-b border-outline-variant/15 pb-2">
                  <span className="font-label-sm text-label-sm text-outline tracking-wider uppercase">DAILY CAP</span>
                  <span className="font-body-md text-body-md text-on-surface tabular-nums font-bold">{spendCap} USDC</span>
                </div>
                <div className="flex items-baseline justify-between border-b border-outline-variant/15 pb-2">
                  <span className="font-label-sm text-label-sm text-outline tracking-wider uppercase">DURATION</span>
                  <span className="font-body-md text-body-md text-on-surface tabular-nums">30 Calendar Days</span>
                </div>
                <div className="flex items-baseline justify-between border-b border-outline-variant/15 pb-2">
                  <span className="font-label-sm text-label-sm text-outline tracking-wider uppercase">SLOT EXPIRY</span>
                  <span className="font-body-sm text-body-sm text-outline tabular-nums">SLOT #39,873,600</span>
                </div>
                <div className="flex items-baseline justify-between border-b border-outline-variant/15 pb-2">
                  <span className="font-label-sm text-label-sm text-outline tracking-wider uppercase">RISK PROFILE</span>
                  <span className="font-body-md text-body-md text-tertiary">Balanced (0.80% Max)</span>
                </div>
              </div>
              <div className="p-space-sm bg-surface-container-low border border-outline-variant/20">
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  “The agent may spend up to {spendCap} USDC per day for 30 days. You can revoke anytime on-chain.”
                </p>
              </div>
            </div>
            
            <div className="border border-outline-variant/30 bg-surface-container-lowest p-space-lg flex flex-col gap-space-md">
              <div className="flex items-center justify-between border-b border-outline-variant/30 pb-space-sm">
                <span className="font-label-lg text-label-lg text-on-surface tracking-wider uppercase">CONTRACT SPECIFICATION</span>
                <span className="font-label-sm text-label-sm text-outline">SVM_V2</span>
              </div>
              <div className="flex flex-col gap-space-sm">
                <div className="flex flex-col gap-1">
                  <span className="font-label-sm text-label-sm text-outline tracking-wider uppercase">DELEGATE PUBLIC KEY</span>
                  <div className="flex items-center justify-between bg-surface-container-low px-space-sm py-1 border border-outline-variant/20">
                    <span className="font-body-sm text-body-sm text-primary tracking-wider">Celx4...v9KP</span>
                    <span className="material-symbols-outlined text-outline hover:text-on-surface text-[14px] cursor-pointer" title="Copy Key">content_copy</span>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-label-sm text-label-sm text-outline tracking-wider uppercase">PROGRAM ID</span>
                  <div className="bg-surface-container-low px-space-sm py-1 border border-outline-variant/20 overflow-hidden">
                    <span className="font-body-sm text-body-sm text-on-surface-variant truncate block" title="TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA">
                      TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-label-sm text-label-sm text-outline tracking-wider uppercase">INSTRUCTIONS GENERATED</span>
                  <div className="flex flex-col gap-1 bg-surface-container-low p-space-sm border border-outline-variant/20 font-body-sm text-body-sm text-on-surface-variant">
                    <div className="flex items-center gap-space-xs text-tertiary">
                      <span className="w-1 h-1 bg-tertiary"></span>
                      <span>1. ApproveChecked (USDC)</span>
                    </div>
                    <div className="flex items-center gap-space-xs text-tertiary">
                      <span className="w-1 h-1 bg-tertiary"></span>
                      <span>2. RegisterDelegate (xStockRegistry)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border border-outline-variant/30 bg-surface-container-lowest p-space-md flex flex-col gap-space-xs">
              <div className="flex items-center justify-between font-label-sm text-label-sm text-outline tracking-widest uppercase">
                <span>SIMULATION PREVIEW</span>
                <span className="text-tertiary flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-tertiary"></span>
                  STATUS: READY TO SIGN
                </span>
              </div>
              <div className="grid grid-cols-2 gap-space-sm pt-space-xs border-t border-outline-variant/20">
                <div>
                  <span className="font-label-sm text-label-sm text-outline block">TARGET SLOT</span>
                  <span className="font-body-sm text-body-sm text-on-surface tabular-nums">#37,281,090</span>
                </div>
                <div>
                  <span className="font-label-sm text-label-sm text-outline block">ESTIMATED NETWORK FEE</span>
                  <span className="font-body-sm text-body-sm text-on-surface tabular-nums">0.000005 SOL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
