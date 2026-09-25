import React from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

export type ViewState = 'DESK' | 'GRANT' | 'STOCK' | 'KILL';

interface HeaderProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
}

export function Header({ currentView, setView }: HeaderProps) {
  const { publicKey } = useWallet();
  const getTabClass = (view: ViewState) => {
    return currentView === view
      ? 'h-16 flex items-center px-space-xs transition-colors tracking-wider uppercase text-primary border-b border-primary font-bold'
      : 'h-16 flex items-center px-space-xs font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors tracking-wider uppercase border-b border-transparent';
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface-container-lowest border-b border-outline-variant/30">
      <div className="h-16 w-full px-margin flex items-center justify-between">
        <div className="flex items-center gap-space-lg">
          <div className="flex flex-col">
            <span className="font-headline-sm text-headline-sm text-primary tracking-tight">CELXOR</span>
            <span className="font-label-sm text-label-sm text-outline tracking-widest uppercase">OBSERVATORY NIGHT DESK · SOLANA</span>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-gutter h-16">
          <button onClick={() => setView('DESK')} className={getTabClass('DESK')}>DESK</button>
          <button onClick={() => setView('GRANT')} className={getTabClass('GRANT')}>GRANT</button>
          <button onClick={() => setView('STOCK')} className={getTabClass('STOCK')}>STOCK DETAIL</button>
          <button onClick={() => setView('KILL')} className={getTabClass('KILL')}>KILL SWITCH</button>
        </nav>
        
        <div className="flex items-center gap-space-md">
          <div className="hidden sm:flex items-center gap-space-xs border border-outline-variant/30 px-space-sm py-space-xs">
            <span className="w-1.5 h-1.5 bg-tertiary"></span>
            <span className="font-label-sm text-label-sm text-tertiary tracking-wider uppercase">SOLANA MAINNET</span>
          </div>
          {publicKey && (
            <div className="hidden lg:flex items-center border border-outline-variant/30 px-space-sm py-space-xs font-body-sm text-body-sm text-outline">
              <span className="tracking-wider">{publicKey.toBase58().slice(0, 4)}...{publicKey.toBase58().slice(-4)}</span>
            </div>
          )}
          <button onClick={() => setView('KILL')} className="border border-error-container bg-error-container/20 hover:bg-error-container text-error hover:text-on-error font-label-sm text-label-sm px-space-sm py-space-xs tracking-widest uppercase transition-colors" type="button">
            KILL
          </button>
          <WalletMultiButton style={{ height: '32px', borderRadius: '2px', backgroundColor: 'var(--color-primary)', color: 'var(--color-on-primary)', fontSize: '12px', fontWeight: 'bold', fontFamily: 'var(--font-jetbrains)' }} />
        </div>
      </div>
    </header>
  );
}
