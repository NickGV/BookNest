import { useState } from "react";

export const CurrentBookCard = ({ book }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="flex flex-col sm:flex-row p-4 bg-gray-800 rounded-lg shadow-md w-full h-auto sm:h-52 text-white relative">
      <div className="absolute top-3 right-3">
        <button className="bg-gray-600 p-1 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-4 h-4 text-gray-300"
          >
            <path d="M5 3v18l7-5 7 5V3z" />
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

      <div className="ml-0 sm:ml-4">
        <h3 className="text-lg font-semibold">{book.title}</h3>
        <p className="text-sm text-gray-400 max-w-prose">
          {book.subtitle && (
            <p className="text-md font-medium text-gray-300 mb-2">
              {showMore
                ? book.subtitle
                : book.subtitle.split(" ").slice(0, 5).join(" ")}
              <button
                onClick={() => setShowMore(!showMore)}
                className="ml-1 text-blue-400"
              >
                {showMore ? "Ver menos" : "Ver más"}
              </button>
            </p>
          )}
        </p>
      </div>
    </div>
  );
};
