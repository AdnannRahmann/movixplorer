import React, { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';

export default function MovieListingPage({ onSelectMovie }) {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      setError(null);
      try {
        let endpoint = 'https://api.tvmaze.com/shows';
        if (searchQuery.trim() !== '') {
          endpoint = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(searchQuery)}`;
        }

        const res = await fetch(endpoint);
        if (!res.ok) throw new Error('Failed to fetch movies from API');
        const data = await res.json();
        
        const parsedData = searchQuery.trim() !== '' 
          ? data.map((item) => item.show) 
          : data.slice(0, 30); // Limit default view for performance

        setMovies(parsedData);
      } catch (err) {
        setError(err.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    const timer = setTimeout(() => {
      fetchMovies();
    }, 400); // Debounce search

    return () => clearTimeout(timer);
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-10">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
              🔍
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for a movie or TV show..."
              className="w-full pl-11 pr-4 py-3.5 bg-slate-900 border border-slate-700/80 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all shadow-lg"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 text-slate-400">
            <div className="w-10 h-10 border-4 border-red-500 border-t-transparent rounded-full animate-spin mb-4" />
            <p>Loading catalog...</p>
          </div>
        ) : error ? (
          <div className="bg-red-950/40 border border-red-800 text-red-300 p-4 rounded-xl text-center max-w-md mx-auto my-10">
            {error}
          </div>
        ) : movies.length === 0 ? (
          <div className="text-center py-20 text-slate-400">
            <p className="text-xl">No movies found matching "{searchQuery}"</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {movies.map((movie) => (
              <MovieCard key={movie.id} show={movie} onSelect={onSelectMovie} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}