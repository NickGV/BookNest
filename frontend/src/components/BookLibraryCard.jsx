import { useState, useContext, useEffect } from "react";
import { BookMenu } from "./BookMenu";
import { BookContext } from "../context/BookContext";

export const BookLibraryCard = ({ book }) => {
  const [showMore, setShowMore] = useState(false);
  const { books } = useContext(BookContext);

  useEffect(() => {
    const isBookAdded = books.some((b) => b.title === book.title);
  }, [books, book.title]);

  const transformedBook = {
    _id: book._id,
    title: book.title,
    description: book.description,
    author: book.author,
    categories: book.categories,
    coverImage: book.coverImage,
    status: book.status,
    pageCount: book.pageCount,
    infoLink: book.infoLink,
    previewLink: book.previewLink,
    publishedDate: book.publishedDate,
  };

  return (
    <div
      key={book._id}
      className="bg-gray-800 text-white p-4 rounded-lg shadow-lg flex flex-col sm:flex-row hover:bg-gray-700 transition-all duration-300 mt-6 sm:mt-24 md:mt-24 lg:mt-24 xl:mt-24 min-h-56 h-auto gap-3 group"
    >
      <div className="h-[211px] w-full sm:w-1/2 overflow-hidden rounded-lg mb-4 sm:mb-0 sm:-mt-28">
        <img
          src={transformedBook.coverImage || ""}
          alt={transformedBook.title}
          className="h-full object-cover rounded-lg hover:rounded-lg transition-transform duration-300 hover:scale-105 w-full"
        />
      </div>
      <div className="flex flex-col w-full sm:w-1/2">
        <h2 className="text-lg font-bold mb-1">{transformedBook.title}</h2>
        {transformedBook.description && (
          <p className="text-md font-medium text-gray-300 mb-2">
            {showMore
              ? transformedBook.description
              : transformedBook.description.split(" ").slice(0, 5).join(" ")}
            <button
              onClick={() => setShowMore(!showMore)}
              className="ml-1 text-blue-400"
            >
              {showMore ? "Ver menos" : "Ver más"}
            </button>
          </p>
        )}
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
        <p className="text-sm text-gray-400 mb-1">Pages: {transformedBook.pageCount}</p>
        <p className="text-sm text-gray-400 mb-1">Published: {transformedBook.publishedDate}</p>
        <a href={transformedBook.infoLink} className="text-blue-400" target="_blank" rel="noopener noreferrer">More Info</a>
        <a href={transformedBook.previewLink} className="text-blue-400" target="_blank" rel="noopener noreferrer">Preview</a>
      </div>
      <BookMenu book={transformedBook} />
    </div>
  );
};
