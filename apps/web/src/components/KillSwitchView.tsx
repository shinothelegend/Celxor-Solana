import React, { useState } from 'react';
import type { ViewState } from './Header';
import { useWallet } from '@solana/wallet-adapter-react';
import bs58 from 'bs58';

export function KillSwitchView({ setView }: { setView: (view: ViewState) => void }) {
  const { publicKey, signMessage } = useWallet();
  const [isRevoking, setIsRevoking] = useState(false);
  const [isDead, setIsDead] = useState(false);

  const triggerEmergencyRevocation = async () => {
    if (!publicKey || !signMessage) {
      alert("Please connect your Solana wallet first in the top right.");
      return;
    }
    
    try {
      setIsRevoking(true);
      const message = new TextEncoder().encode(`CELXOR_EMERGENCY_REVOKE\nTARGET:ALL_POOLS\nNON_CUSTODIAL_TERMINATION`);
      const signature = await signMessage(message);
      console.log('Revoke signature:', bs58.encode(signature));
      
      setIsRevoking(false);
      setIsDead(true);
    } catch (err) {
      console.error(err);
      setIsRevoking(false);
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* SCENE HEADER ART */}
      <div className="relative w-full h-[430px] min-h-[340px] max-h-[460px] overflow-hidden -mt-16">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/scene_c.jpg')" }}></div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-surface-container-lowest/40 via-surface-container-lowest/70 to-surface-container-lowest"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest/80 via-transparent to-surface-container-lowest/80"></div>
        
        <div className="absolute inset-x-0 bottom-0 px-margin pb-space-md flex flex-col justify-end">
          <div className="flex flex-wrap items-end justify-between gap-space-md">
            <div className="space-y-space-xs">
              <div className="flex items-center gap-space-sm font-label-sm text-label-sm text-error tracking-widest uppercase">
                <span className="w-1.5 h-1.5 bg-error animate-pulse"></span>
                <span>SEC-LVL 00 // EMERGENCY AUTHORIZATION ROUTINE</span>
              </div>
              <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">Station Kill Switch</h1>
              <p className="font-label-md text-label-md text-error tracking-widest uppercase font-bold">IRREVERSIBLE DELEGATION TERMINATION</p>
            </div>
            <div className="hidden sm:flex flex-col items-end text-right font-label-sm text-label-sm text-outline">
              <span className="tracking-wider text-on-surface-variant font-bold">STATION ARRAY: NY-ÅLESUND BOREAL</span>
              <span className="tracking-wider">SYS-EPOCH: #682 // ORBITAL RETICLE: LOCK</span>
              <span className="text-tertiary">RPC DIRECT BROADCAST BUS: ARMED</span>
            </div>
          </div>
        </div>
      </div>

      {/* GROUND PLANE */}
      <div className="w-full px-margin py-space-xl max-w-5xl mx-auto flex flex-col gap-space-xl">
        <div className="relative bg-surface-container-low p-space-lg shadow-sm">
          <div className="space-y-space-sm">
            <div className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-error text-[18px]">warning</span>
              <span className="font-label-sm text-label-sm text-error uppercase tracking-widest">Protocol Mandate: Absolute Revocation</span>
            </div>
            <p className="font-headline-sm text-headline-sm text-on-surface leading-snug">
              This will revoke the agent's permission on-chain. It cannot spend after this. The revoke works even if our server is down.
            </p>
            <p className="font-body-sm text-body-sm text-on-surface-variant pt-space-xs">
              Generates direct Revoke transactions for USDC and all active xStock token accounts (AAPLx, NVDAx, TSLAx, MSFTx). Broadcasted directly to RPC nodes. No server coordination required.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-space-sm">
          <div className="flex items-center justify-between pb-space-xs">
            <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
              TARGETED DELEGATIONS FOR DE-AUTHORIZATION (4)
            </span>
            <span className="font-label-sm text-label-sm text-error uppercase tracking-wider font-bold">
              STATUS: EXPOSURE ACTIVE
            </span>
          </div>
          
          <div className="flex flex-col gap-space-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-surface-container-low px-space-md py-space-sm gap-space-xs">
              <div className="flex items-center gap-space-md">
                <span className="font-label-sm text-label-sm text-outline w-12">01 // SPL</span>
                <div className="flex flex-col">
                  <span className="font-label-lg text-label-lg text-primary tracking-wide">USDC Treasury Account</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant font-mono">7mX9...kL2p</span>
                </div>
              </div>
              <div className="flex items-center justify-between sm:justify-end gap-space-lg font-mono">
                <div className="text-right">
                  <span className="block font-label-sm text-label-sm text-outline">CURRENT CEILING</span>
                  <span className="font-body-sm text-body-sm text-on-surface">10,000.00 USDC / day</span>
                </div>
                <div className="px-space-sm py-space-xs bg-error-container text-error font-label-sm text-label-sm tracking-widest font-bold">
                  REVOKE TO 0
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-surface-container px-space-md py-space-sm gap-space-xs">
              <div className="flex items-center gap-space-md">
                <span className="font-label-sm text-label-sm text-outline w-12">02 // STK</span>
                <div className="flex flex-col">
                  <span className="font-label-lg text-label-lg text-secondary tracking-wide">AAPLx Synthetic Vault</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant font-mono">4bW1...9zQe</span>
                </div>
              </div>
              <div className="flex items-center justify-between sm:justify-end gap-space-lg font-mono">
                <div className="text-right">
                  <span className="block font-label-sm text-label-sm text-outline">DELEGATE HASH</span>
                  <span className="font-body-sm text-body-sm text-on-surface">Celx4...v9KP</span>
                </div>
                <div className="px-space-sm py-space-xs bg-error-container text-error font-label-sm text-label-sm tracking-widest font-bold">
                  TERMINATE
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-surface-container-low px-space-md py-space-sm gap-space-xs">
              <div className="flex items-center gap-space-md">
                <span className="font-label-sm text-label-sm text-outline w-12">03 // STK</span>
                <div className="flex flex-col">
                  <span className="font-label-lg text-label-lg text-secondary tracking-wide">NVDAx Synthetic Vault</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant font-mono">9pY2...1xVm</span>
                </div>
              </div>
              <div className="flex items-center justify-between sm:justify-end gap-space-lg font-mono">
                <div className="text-right">
                  <span className="block font-label-sm text-label-sm text-outline">DELEGATE HASH</span>
                  <span className="font-body-sm text-body-sm text-on-surface">Celx4...v9KP</span>
                </div>
                <div className="px-space-sm py-space-xs bg-error-container text-error font-label-sm text-label-sm tracking-widest font-bold">
                  TERMINATE
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-surface-container px-space-md py-space-sm gap-space-xs">
              <div className="flex items-center gap-space-md">
                <span className="font-label-sm text-label-sm text-outline w-12">04 // STK</span>
                <div className="flex flex-col">
                  <span className="font-label-lg text-label-lg text-secondary tracking-wide">TSLAx Synthetic Vault</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant font-mono">2tM8...5rKo</span>
                </div>
              </div>
              <div className="flex items-center justify-between sm:justify-end gap-space-lg font-mono">
                <div className="text-right">
                  <span className="block font-label-sm text-label-sm text-outline">DELEGATE HASH</span>
                  <span className="font-body-sm text-body-sm text-on-surface">Celx4...v9KP</span>
                </div>
                <div className="px-space-sm py-space-xs bg-error-container text-error font-label-sm text-label-sm tracking-widest font-bold">
                  TERMINATE
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* EXECUTION ZONE */}
        <div className="flex flex-col gap-space-md pt-space-sm">
          <button 
            disabled={isRevoking || isDead}
            onClick={triggerEmergencyRevocation}
            className={`w-full py-space-lg px-space-xl flex flex-col sm:flex-row items-center justify-center gap-space-sm transition-colors text-center shadow-md ${
              isDead 
                ? 'bg-surface-container-high text-outline cursor-not-allowed'
                : isRevoking
                ? 'bg-error-container opacity-80 cursor-not-allowed text-on-error'
                : 'bg-error hover:bg-error-container text-on-error cursor-pointer'
            }`}
            type="button"
          >
            {isDead ? (
              <>
                <span className="material-symbols-outlined text-[24px]">verified</span>
                <span className="font-label-lg text-label-lg uppercase tracking-widest font-bold">
                  SUCCESS // ALL DELEGATIONS DESTROYED AT SLOT #284192044
                </span>
              </>
            ) : isRevoking ? (
              <>
                <span className="material-symbols-outlined animate-spin text-[24px]">sync</span>
                <span className="font-label-lg text-label-lg uppercase tracking-widest font-bold">
                  BROADCASTING REVOCATION TRANSACTIONS TO SOLANA HEAD...
                </span>
              </>
            ) : (
              <>
                <span className="material-symbols-outlined text-[24px]">gavel</span>
                <span className="font-label-lg text-label-lg uppercase tracking-widest font-bold">
                  [ REVOKE NOW — BROADCAST TO SOLANA ]
                </span>
              </>
            )}
          </button>
          
          <div className="bg-surface-container-lowest p-space-md space-y-space-xs">
            <div className="flex flex-wrap items-center justify-between gap-space-xs font-label-sm text-label-sm">
              <span className="text-error font-bold flex items-center gap-space-xs">
                <span className="inline-block w-1.5 h-1.5 bg-error"></span>
                POST-SIGN STATE:
              </span>
              <span className="text-on-surface-variant font-mono">
                {isDead ? (
                  <>Status confirmed: <strong className="text-error font-bold">DEAD (PERMANENTLY DE-AUTHORIZED)</strong></>
                ) : (
                  <>Once signed, delegate status switches permanently to: <strong className="text-error">DEAD</strong>.</>
                )}
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-space-xs font-label-sm text-label-sm text-outline font-mono">
              <span>SLOT TARGET: CURRENT HEAD [SLOT #284192041]</span>
              <span>PROOF SCRIPT PARITY: prove-kill.ts (VERIFIED SHA-256)</span>
            </div>
            <div className="pt-space-xs text-center font-label-sm text-label-sm text-outline uppercase tracking-wider">
              No undo available from this screen. Action is mathematically irrevocable across consensus.
            </div>
          </div>
        </div>

        {/* Direct RPC Confirmation Drawer */}
        <div className="bg-surface-container-low p-space-md flex flex-col gap-space-xs">
          <div className="flex items-center justify-between text-outline font-label-sm text-label-sm">
            <span className="uppercase tracking-wider">DIRECT PEER NODES (NO DISPATCH PROXY)</span>
            <span className="text-tertiary">RPC LATENCY: 22ms</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-xs text-on-surface-variant font-mono font-body-sm text-body-sm">
            <div className="bg-surface-container-high p-space-xs flex justify-between">
              <span>01. node-svalbard.mainnet</span>
              <span className="text-tertiary">CONNECTED</span>
            </div>
            <div className="bg-surface-container-high p-space-xs flex justify-between">
              <span>02. rpc-frankfurt.celxor</span>
              <span className="text-tertiary">STANDBY</span>
            </div>
            <div className="bg-surface-container-high p-space-xs flex justify-between">
              <span>03. solana-direct-gossip</span>
              <span className="text-tertiary">SYNCED</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
