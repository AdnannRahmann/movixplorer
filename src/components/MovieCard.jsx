import React from 'react';

export default function MovieCard({ show, onSelect }) {
  const title = show.name;
  const rating = show.rating?.average ? show.rating.average.toFixed(1) : 'N/A';
  const releaseYear = show.premiered ? show.premiered.split('-')[0] : 'Unknown';
  const poster = show.image?.medium || 'https://via.placeholder.com/210x295?text=No+Poster';

  return (
    <div className="bg-slate-800/80 border border-slate-700/60 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:border-slate-500 transition-all transform hover:-translate-y-1 flex flex-col justify-between">
      <div className="relative">
        <img 
          src={poster} 
          alt={title} 
          className="w-full h-72 object-cover bg-slate-900" 
          loading="lazy"
        />
        <div className="absolute top-2 right-2 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-md text-amber-400 font-bold text-xs flex items-center gap-1 border border-slate-700">
          ⭐ {rating}
        </div>
      </div>

      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-bold text-lg text-slate-100 truncate" title={title}>
            {title}
          </h3>
          <p className="text-slate-400 text-sm mt-1 flex items-center gap-2">
            <span>📅 {releaseYear}</span>
            {show.genres?.[0] && <span className="bg-slate-700/50 px-2 py-0.5 rounded text-xs">{show.genres[0]}</span>}
          </p>
        </div>

        <button
          onClick={() => onSelect(show)}
          className="mt-4 w-full bg-red-600 hover:bg-red-500 text-white py-2 rounded-lg font-medium text-sm transition-colors shadow-md"
        >
          See Details
        </button>
      </div>
    </div>
  );
}