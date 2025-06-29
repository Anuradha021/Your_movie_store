import { useState } from "react";

function StarRating({ maxRating = 10, onSetRating }) {
  const [hover, setHover] = useState(0);
  const [rating, setRating] = useState(0);

  const handleClick = r => {
    setRating(r);
    onSetRating(r);
  };

  return (
    <div className="flex gap-1 mt-4 bg-gray-800 p-2 rounded w-fit">
      {Array.from({ length: maxRating }, (_, i) => (
        <span
          key={i}
          className="cursor-pointer"
          style={{ fontSize: "24px" }}
          onMouseEnter={() => setHover(i + 1)}
          onMouseLeave={() => setHover(0)}
          onClick={() => handleClick(i + 1)}
        >
          {hover ? (i < hover ? "★" : "☆") : (i < rating ? "★" : "☆")}
        </span>
      ))}
    </div>
  );
}

export default StarRating;
