import React, { useEffect } from 'react';

export default function MovieDetailsModal({ show, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!show) return null;

  const title = show.name;
  const rating = show.rating?.average ? show.rating.average.toFixed(1) : 'N/A';
  const releaseDate = show.premiered || 'N/A';
  const image = show.image?.original || show.image?.medium || 'https://via.placeholder.com/400x600?text=No+Image';
  const cleanSummary = show.summary ? show.summary.replace(/<[^>]*>?/gm, '') : 'No summary available.';

  return (
    <div 
      className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-slate-900 border border-slate-700 w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl relative text-slate-100 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 bg-slate-950/70 hover:bg-slate-800 text-slate-300 hover:text-white rounded-full w-9 h-9 flex items-center justify-center border border-slate-700 transition"
          aria-label="Close Modal"
        >
          ✕
        </button>

        <div className="relative h-64 sm:h-80 w-full bg-slate-950 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
        </div>

        <div className="p-6 -mt-12 relative">
          <h2 className="text-3xl font-extrabold text-white">{title}</h2>
          
          <div className="flex flex-wrap items-center gap-3 mt-3 text-sm text-slate-300">
            <span className="bg-amber-500/20 text-amber-300 border border-amber-500/40 px-3 py-1 rounded-full font-semibold">
              ⭐ Rating: {rating}
            </span>
            <span className="bg-slate-800 border border-slate-700 px-3 py-1 rounded-full">
              📅 Release: {releaseDate}
            </span>
            {show.language && (
              <span className="bg-slate-800 border border-slate-700 px-3 py-1 rounded-full">
                🌐 {show.language}
              </span>
            )}
          </div>

          {show.genres?.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {show.genres.map((genre) => (
                <span key={genre} className="bg-red-600/20 text-red-400 border border-red-500/30 text-xs px-2.5 py-1 rounded-md">
                  {genre}
                </span>
              ))}
            </div>
          )}

          <div className="mt-6">
            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Overview</h3>
            <p className="text-slate-300 text-base leading-relaxed mt-2">{cleanSummary}</p>
          </div>

          <div className="mt-8 flex justify-end">
            <button
              onClick={onClose}
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-5 py-2 rounded-lg font-medium transition border border-slate-700"
            >
              ❌ Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}