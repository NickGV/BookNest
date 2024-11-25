import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const CurrentBookCard = ({ book }) => {
  const [showMore, setShowMore] = useState(false);
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/book/${book._id}`);
  };

  return (
    <div
      className="flex flex-col sm:flex-row p-4 bg-gray-800 rounded-lg shadow-md w-full h-auto sm:h-52 text-white relative cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="absolute bottom-3 right-3">
        <button className="bg-gray-600 p-1 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-4 h-4 text-gray-300"
          >
            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zm6 0a2 2 0 11-4 0 2 2 0 014 0zm6 0a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </button>
      </div>

      <div className="w-full sm:w-56 h-40 sm:h-full mb-4 sm:mb-0">
        <img
          src={book.coverImage}
          alt={book.title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      <div className="ml-0 sm:ml-4 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold">
            {showMore ? book.title : `${book.title.substring(0, 50)}${book.title.length > 50 ? "..." : ""}`}
          </h3>
          {book.subtitle && (
            <p className="text-md font-medium text-gray-300 mb-2">
              {showMore ? book.subtitle : `${book.subtitle.substring(0, 50)}${book.subtitle.length > 50 ? "..." : ""}`}
            </p>
          )}
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setShowMore(!showMore);
          }}
          className="text-blue-400 mt-2"
        >
          {showMore ? "Show less" : "Show more"}
        </button>
      </div>
    </div>
  );
};
