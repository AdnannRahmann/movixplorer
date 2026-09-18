import React from 'react';

export default function HomePage({ onExploreClick }) {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col justify-between relative overflow-hidden px-4 sm:px-6 lg:px-8">
      
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-red-600/20 to-cyan-500/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 -left-20 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      
      <div className="max-w-4xl mx-auto text-center pt-16 pb-12 relative z-10 flex-1 flex flex-col justify-center items-center">
        
        
        <div className="inline-flex items-center gap-2 bg-slate-900/90 border border-red-500/30 text-red-400 text-xs sm:text-sm font-semibold px-4 py-2 rounded-full mb-8 shadow-lg shadow-red-500/10 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
          </span>
          🎬 Live TVMaze API Integration
        </div>

        
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white leading-[1.15]">
          DISCOVER YOUR NEXT <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-amber-400 to-cyan-400">
            FAVORITE SHOW
          </span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed font-light">
          Explore trending TV shows, detailed cast info, ratings, and episode guides—all powered by real-time API data.
        </p>

        
        <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center">
          <button
            onClick={onExploreClick}
            className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-cyan-500 hover:from-red-500 hover:to-cyan-400 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-xl shadow-red-600/30 hover:shadow-red-500/50 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Explore Catalog 🚀
          </button>
        </div>

       
        <div className="mt-16 grid grid-cols-3 gap-6 sm:gap-12 border-t border-slate-800/80 pt-8 max-w-2xl w-full">
          <div>
            <p className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">10k+</p>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">Shows Available</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-extrabold text-cyan-400">4.8★</p>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">Average Rating</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-extrabold text-red-500">100%</p>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">Free Access</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto w-full pb-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-slate-900/60 border border-slate-800 hover:border-slate-700 p-6 rounded-2xl backdrop-blur-md transition-all hover:-translate-y-1 group">
            <div className="w-12 h-12 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center justify-center text-2xl mb-4 text-red-400 group-hover:scale-110 transition-transform">
              🔍
            </div>
            <h3 className="text-lg font-bold text-slate-100">Instant Search</h3>
            <p className="text-sm text-slate-400 mt-2 leading-relaxed">
              Filter through thousands of titles dynamically as you type with debounced API queries.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 hover:border-slate-700 p-6 rounded-2xl backdrop-blur-md transition-all hover:-translate-y-1 group">
            <div className="w-12 h-12 bg-amber-500/10 border border-amber-500/20 rounded-xl flex items-center justify-center text-2xl mb-4 text-cyan-400 group-hover:scale-110 transition-transform">
              ⭐
            </div>
            <h3 className="text-lg font-bold text-slate-100">Live Ratings</h3>
            <p className="text-sm text-slate-400 mt-2 leading-relaxed">
              View audience scores, release dates, and genres fetched directly from the database.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 hover:border-slate-700 p-6 rounded-2xl backdrop-blur-md transition-all hover:-translate-y-1 group">
            <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center text-2xl mb-4 text-blue-400 group-hover:scale-110 transition-transform">
              🎞️
            </div>
            <h3 className="text-lg font-bold text-slate-100">Details Modal</h3>
            <p className="text-sm text-slate-400 mt-2 leading-relaxed">
              Click any show card to inspect full plot summaries and backdrop artwork in an interactive overlay.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}