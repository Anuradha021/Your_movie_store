import { useEffect, useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import WatchedList from "./components/WatchedList";
import MovieDetails from "./components/MovieDetails";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);
  

  useEffect(() => {
    if (!query) return;
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`)
      .then(res => res.json())
      .then(data => setMovies(data.Search || []));
  }, [query]);

  useEffect(() => {
    if (!selectedId) return;
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${selectedId}&plot=full`)
      .then(res => res.json())
      .then(data => setSelectedMovie(data));
  }, [selectedId]);

  return (
    <div className="min-h-screen bg-purple-800 text-white">
      <Header />
      <SearchBar query={query} setQuery={setQuery} resultCount={movies.length} />
      <div className="grid grid-cols-2 h-[80vh] overflow-hidden">
        <MovieList
          movies={movies}
          onSelectMovie={setSelectedId}
        />
        {selectedMovie ? (
          <MovieDetails
            movie={selectedMovie}
            onClose={() => { setSelectedId(null); setSelectedMovie(null); }}
            onAddWatched={newMovie => setWatched([...watched, newMovie])}
            watched={watched}
          />
        ) : (
          <WatchedList watched={watched} />
        )}
      </div>
    </div>
  );
}

export default App;
