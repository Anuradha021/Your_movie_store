function average(arr) {
  if (!arr.length) return 0;
  return (arr.reduce((acc, cur) => acc + cur, 0) / arr.length).toFixed(2);
}

function SummaryBox({ watched }) {
  return (
    <div className="bg-gray-900 text-white p-4 rounded mb-4">
      <h2 className="text-lg font-bold mb-2">MOVIES YOU WATCHED</h2>
      <div className="flex justify-between text-sm">
        <span>🎬 {watched.length} movies</span>
        <span>⭐ imdbRating: {average(watched.map((m) => +m.imdbRating))}</span>
        <span>🌟 userRating: {average(watched.map((m) => +m.userRating))}</span>
        <span>⏳ Runtime: {average(watched.map((m) => +m.Runtime))}</span>
      </div>
    </div>
  );
}

export default SummaryBox;
