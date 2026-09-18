import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-8 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 text-center sm:flex sm:justify-between sm:items-center">
        <div className="mb-4 sm:mb-0">
          <p className="text-lg font-bold text-slate-200">🎬 MovieExplorer</p>
          <p className="text-sm mt-1">Discover movies & TV shows from around the world.</p>
        </div>
        <div className="text-sm">
          <p>© 2026 MovieExplorer. All rights reserved.</p>
          <p className="mt-1 text-slate-500">Powered by TVMaze API</p>
        </div>
      </div>
    </footer>
  );
}