function SearchBar({ query, setQuery, resultCount }) {
  return (
    <div className="bg-yellow-400 px-6 py-4 flex justify-between items-center">
      <input
        className="px-4 py-2 rounded w-1/2 text-black text-center bg-white outline-none"
        type="text"
        placeholder="Search your favorite movie..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {resultCount !== null && (
        <p className="ml-4 font-bold text-lg">
          Found <span className="text-black">{resultCount}</span> results
        </p>
      )}
    </div>
  );
}

export default SearchBar;
