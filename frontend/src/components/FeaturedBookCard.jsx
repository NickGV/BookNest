import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BookMenu } from "./BookMenu";

export const FeaturedBookCard = ({ book }) => {
  const [showMore, setShowMore] = useState(false);
  const navigate = useNavigate();

  if (!book.volumeInfo) {
    return null;
  }

  const transformedBook = {
    _id: book.id,
    title: book.volumeInfo.title,
    subtitle: book.volumeInfo.subtitle,
    description: book.volumeInfo.description,
    author: book.volumeInfo.authors?.join(", "),
    categories: book.volumeInfo.categories?.join(", "),
    coverImage: book.volumeInfo.imageLinks?.thumbnail,
  };

  const handleCardClick = () => {
    navigate(`/book/${transformedBook._id}`);
  };

  return (
    <div
      className="bg-gray-800 text-white p-4 rounded-lg shadow-lg flex flex-col hover:bg-gray-700 transition-all duration-300 group cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="h-[211px] w-full overflow-hidden rounded-lg mb-4">
        <img
          src={transformedBook.coverImage || ""}
          alt={transformedBook.title}
          className="h-full object-cover rounded-lg hover:rounded-lg transition-transform duration-300 hover:scale-105 w-full"
        />
      </div>
      <div className="flex flex-col">
        <h2 className="text-lg font-bold mb-1">
          {showMore
            ? transformedBook.title
            : `${transformedBook.title.substring(0, 50)}${
                transformedBook.title.length > 50 ? "..." : ""
              }`}
        </h2>
        <p className="text-sm text-gray-400 mb-1">{transformedBook.author}</p>
        <div className="flex flex-wrap mt-2">
          {transformedBook.categories?.split(", ").map((category) => (
            <span
              key={category}
              className="text-xs text-gray-200 mb-1 mr-2 bg-gray-600 px-2 py-1 rounded-full"
            >
              {category}
            </span>
          ))}
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
      <div className="">
        <BookMenu book={transformedBook} />
      </div>
    </div>
  );
};
