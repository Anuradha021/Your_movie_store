import MovieItem from "./MovieItem";

function MovieList({ movies, onSelectMovie, hasSearched }) {
  return (
    <div className="overflow-y-scroll p-4 bg-purple-900">
      {!hasSearched ? (
        <p className="text-center text-white text-lg mt-20">Start searching for movies 🎬</p>
      ) : movies.length === 0 ? (
        <p className="text-center text-white text-lg mt-20">Movie not found 😢</p>
      ) : (
        movies.map(movie => (
          <MovieItem
            key={movie.imdbID}
            movie={movie}
            onSelectMovie={onSelectMovie}
          />
        ))
      )}
    </div>
  );
}
export default MovieList;