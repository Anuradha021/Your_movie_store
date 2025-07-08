import { useState, useEffect } from "react";
import StarRating from "./StarRating";

function MovieDetails({ movie, onClose, onAddWatched, watched }) {
  const [userRating, setUserRating] = useState(0);

  useEffect(() => {
    setUserRating(0);
  }, [movie]);

  const alreadyWatched = watched.some((m) => m.imdbID === movie.imdbID);

  const handleAdd = () => {
    const newMovie = {
      imdbID: movie.imdbID,
      Title: movie.Title,
      Year: movie.Year,
      Poster: movie.Poster,
      imdbRating: Number(movie.imdbRating),
      userRating,
      Runtime: Number(movie.Runtime?.split(" ")[0] || 0),
    };
    onAddWatched(newMovie);
    onClose();
  };

  return (
    <div className="p-6 bg-purple-900 h-full overflow-y-scroll">
      <button onClick={onClose} className="text-white mb-4 text-xl">←</button>
      <img src={movie.Poster} alt={movie.Title} className="w-40 mb-4" />
      <h2 className="text-2xl font-bold">{movie.Title}</h2>
      <p className="text-sm text-gray-300">{movie.Released} • {movie.Runtime}</p>
      <p className="text-sm text-yellow-300 mb-2">⭐ {movie.imdbRating} IMDb Rating</p>
      <p className="italic text-white mt-4">{movie.Plot}</p>
      <p className="mt-4 text-sm text-gray-300">
        <strong>Starring:</strong> {movie.Actors}
      </p>
      <p className="text-sm text-gray-300">
        <strong>Directed by:</strong> {movie.Director}
      </p>

      {!alreadyWatched && (
        <>
          <StarRating maxRating={10} size={24} onSetRating={setUserRating} />
          <button
            className="mt-4 bg-green-500 px-4 py-2 rounded"
            onClick={handleAdd}
            disabled={userRating === 0}
          >
            Add to Watched
          </button>
        </>
      )}
    </div>
  );
}

export default MovieDetails;
