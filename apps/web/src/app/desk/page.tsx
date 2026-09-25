'use client';

import React, { useState } from 'react';
import { Header, type ViewState } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { DeskView } from '../../components/DeskView';
import { GrantView } from '../../components/GrantView';
import { KillSwitchView } from '../../components/KillSwitchView';
import { StockDetailView } from '../../components/StockDetailView';

export default function CelxorApp() {
  const [currentView, setCurrentView] = useState<ViewState>('DESK');

  return (
    <>
      <Header currentView={currentView} setView={setCurrentView} />
      <main className="w-full pt-16 bg-surface-container-lowest min-h-screen animate-in fade-in duration-300">
        {currentView === 'DESK' && <DeskView setView={setCurrentView} />}
        {currentView === 'GRANT' && <GrantView setView={setCurrentView} />}
        {currentView === 'KILL' && <KillSwitchView setView={setCurrentView} />}
        {currentView === 'STOCK' && <StockDetailView setView={setCurrentView} />}
      </main>
      <Footer />
    </>
  );
}
