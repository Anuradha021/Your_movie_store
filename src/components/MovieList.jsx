import MovieItem from "./MovieItem";

function MovieList({ movies, onSelectMovie }) {
  return (
    <div className="overflow-y-scroll p-4 bg-purple-900">
      {movies.length === 0 ? (
        <p className="text-center text-white text-lg mt-20">Start searching for movies 🎬</p>
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
