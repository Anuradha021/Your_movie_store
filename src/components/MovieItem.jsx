function MovieItem({ movie, onSelectMovie }) {
  return (
    <div
      onClick={() => onSelectMovie(movie.imdbID)}
      className="flex gap-4 items-center bg-purple-900 p-3 rounded mb-2 hover:bg-purple-800 cursor-pointer"
    >
      <img
        className="h-20 w-14 object-cover"
        src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/100x150?text=No+Image"}
        alt={movie.Title}
      />
      <div>
        <h3 className="text-lg font-bold">{movie.Title}</h3>
        <p className="text-sm text-gray-300">{movie.Year}</p>
      </div>
    </div>
  );
}

export default MovieItem;
