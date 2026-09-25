import React from 'react';

export function Footer() {
  return (
    <footer className="w-full border-t border-outline-variant/30 bg-surface-container-lowest py-space-md">
      <div className="w-full px-margin flex flex-col md:flex-row items-center justify-between gap-space-sm font-label-sm text-label-sm text-outline">
        <div className="flex items-center gap-space-md">
          <span className="tracking-wider">LAT 78°13'N · SVALBARD ARRAY</span>
          <span className="hidden sm:inline">|</span>
          <span className="tracking-wider">EPOCH #682 · SLOT #284192041</span>
        </div>
        <div className="flex items-center gap-space-md">
          <span className="tracking-wider">STATUS: CRYOGENIC AUTONOMOUS</span>
          <span>© CELXOR POLAR ASSET OBSERVATORY</span>
        </div>
      </div>
    </footer>
  );
}
