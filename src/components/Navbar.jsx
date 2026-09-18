import React from 'react';

export default function Navbar({ activePage, setActivePage }) {
  return (
    <nav className="bg-slate-900 border-b border-slate-800 text-white sticky top-0 z-40 backdrop-blur-md bg-opacity-90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div 
          onClick={() => setActivePage('home')} 
          className="flex items-center space-x-2 cursor-pointer group"
        >
          <span className="text-2xl group-hover:scale-110 transition-transform">🎬</span>
          <span className="font-extrabold text-xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-400">
            MovieExplorer
          </span>
        </div>
        
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setActivePage('home')}
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              activePage === 'home' ? 'text-red-500 font-semibold' : 'text-slate-300 hover:text-white'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => setActivePage('movies')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activePage === 'movies'
                ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                : 'bg-slate-800 text-slate-200 hover:bg-slate-700'
            }`}
          >
            Movies & Shows
          </button>
        </div>
      </div>
    </nav>
  );
}