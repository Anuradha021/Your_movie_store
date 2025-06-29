function WatchedList({ watched }) {
  const avg = arr => arr.length ? (arr.reduce((a,b) => a+b,0)/arr.length).toFixed(2) : 0;
  const count = watched.length;
  const avgImdb = avg(watched.map(m => m.imdbRating));
  const avgUser = avg(watched.map(m => m.userRating));
  const avgRuntime = avg(watched.map(m => m.Runtime));

  return (
    <div className="p-4 bg-purple-900 overflow-y-scroll">
      <div className="bg-gray-900 p-4 rounded mb-4">
        <h2 className="text-lg font-bold mb-2">Movies You Watched</h2>
        <div className="flex justify-between text-sm">
          <span>🎬 {count} movies</span>
          <span>⭐ IMDb: {avgImdb}</span>
          <span>🌟 Your: {avgUser}</span>
          <span>⏳ Runtime: {avgRuntime} min</span>
        </div>
      </div>
      {/* Optionally list watched movies */}
    </div>
  );
}

export default WatchedList;
