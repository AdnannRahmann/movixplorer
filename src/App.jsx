import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MovieListingPage from './pages/MovieListingPage';
import MovieDetailsModal from './components/MovieDetailsModal';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 font-sans antialiased text-slate-100">
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      <main className="flex-grow">
        {activePage === 'home' ? (
          <HomePage onExploreClick={() => setActivePage('movies')} />
        ) : (
          <MovieListingPage onSelectMovie={(movie) => setSelectedMovie(movie)} />
        )}
      </main>

      <Footer />

      {selectedMovie && (
        <MovieDetailsModal
          show={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
}