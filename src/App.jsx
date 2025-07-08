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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!query) return;
    setError("");
    setLoading(true);
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`)
      .then(res => res.json())
      .then(data => {
        if (data.Response === "False") {
          // Only show error if it's not 'Too many results.'
          if (data.Error && data.Error !== "Too many results.") {
            setError(data.Error || "No movies found.");
          } else {
            setError("");
          }
          setMovies([]);
        } else {
          setMovies(data.Search || []);
        }
      })
      .catch(() => setError("Failed to fetch movies."))
      .finally(() => setLoading(false));
  }, [query]);

  useEffect(() => {
    if (!selectedId) return;
    setError("");
    setLoading(true);
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${selectedId}&plot=full`)
      .then(res => res.json())
      .then(data => {
        if (data.Response === "False") {
          setError(data.Error || "Failed to fetch movie details.");
          setSelectedMovie(null);
        } else {
          setSelectedMovie(data);
        }
      })
      .catch(() => setError("Failed to fetch movie details."))
      .finally(() => setLoading(false));
  }, [selectedId]);

  return (
    <div className="min-h-screen bg-purple-800 text-white">
      <Header />
      {error && <div className="bg-red-500 text-white p-2 text-center">{error}</div>}
      <SearchBar query={query} setQuery={setQuery} resultCount={movies.length} />
      {loading ? (
        <div className="flex items-center justify-center h-[80vh] text-xl">Loading...</div>
      ) : (
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
      )}
    </div>
  );
}

export default App;
