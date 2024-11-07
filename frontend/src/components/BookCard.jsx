import { useState } from "react";

export const BookCard = ({ book }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div
      key={book.id}
      className="bg-gray-800 text-white p-4 rounded-lg shadow-lg flex hover:bg-gray-700 transition-all duration-300 mb-28 min-h-56 h-auto"
    >
      <div className="h-[211px] w-1/2 overflow-hidden rounded-lg -mt-28">
        <img
          src={book.volumeInfo.imageLinks?.thumbnail || ""}
          alt={book.volumeInfo.title}
          className="h-full object-cover rounded-lg hover:rounded-lg transition-transform duration-300 hover:scale-105 w-[211]"
        />
      </div>
      <div className="flex flex-col w-1/2">
        <h2 className="text-lg font-bold mb-1">{book.volumeInfo.title}</h2>
        {book.volumeInfo.subtitle && (
          <p className="text-md font-medium text-gray-300 mb-2">
            {showMore
              ? book.volumeInfo.subtitle
              : book.volumeInfo.subtitle.split(" ").slice(0, 5).join(" ")}
            <button
              onClick={() => setShowMore(!showMore)}
              className="ml-1 text-blue-400"
            >
              {showMore ? "Ver menos" : "Ver más"}
            </button>
          </p>
        )}
        <p className="text-sm text-gray-400 mb-1">
          {book.volumeInfo.authors?.join(", ")}
        </p>
        <div className="flex flex-wrap mt-2">
          {book.volumeInfo.categories?.map((category) => (
            <span
              key={category}
              className="text-xs text-gray-200 mb-1 mr-2 bg-gray-600 px-2 py-1 rounded-full"
            >
              {category}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
