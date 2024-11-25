import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { BookContext } from "../context/BookContext";
import { fetchBookById } from "../api/bookService";

export const BookDetails = () => {
  const { id } = useParams();
  const { books } = useContext(BookContext);
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      let foundBook = books.find((b) => b._id === id);
      if (!foundBook) {
        const fetchedBook = await fetchBookById(id);
        if (fetchedBook.volumeInfo) {
          foundBook = {
            _id: fetchedBook.id,
            title: fetchedBook.volumeInfo.title,
            subtitle: fetchedBook.volumeInfo.subtitle,
            description: fetchedBook.volumeInfo.description,
            author: fetchedBook.volumeInfo.authors?.join(", "),
            categories: fetchedBook.volumeInfo.categories?.join(", "),
            coverImage: fetchedBook.volumeInfo.imageLinks?.thumbnail,
            pageCount: fetchedBook.volumeInfo.pageCount,
            infoLink: fetchedBook.volumeInfo.infoLink,
            previewLink: fetchedBook.volumeInfo.previewLink,
            publishedDate: fetchedBook.volumeInfo.publishedDate,
          };
        }
      }
      setBook(foundBook);
    };

    fetchBook();
  }, [id, books]);

  if (!book) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <div className="max-w-screen-lg mx-auto p-4 text-white">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <div className="flex flex-col sm:flex-row">
          <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
            <img
              src={book.coverImage}
              alt={book.title}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div className="sm:ml-6 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">{book.title}</h1>
              {book.subtitle && (
                <h2 className="text-xl font-semibold text-gray-300 mb-4">
                  {book.subtitle}
                </h2>
              )}
              <p className="text-md text-gray-400 mb-4">{book.description}</p>
              <p className="text-md text-gray-400 mb-2">
                <strong>Author:</strong> {book.author}
              </p>
              <p className="text-md text-gray-400 mb-2">
                <strong>Categories:</strong> {book.categories}
              </p>
              <p className="text-md text-gray-400 mb-2">
                <strong>Pages:</strong> {book.pageCount}
              </p>
              <p className="text-md text-gray-400 mb-2">
                <strong>Published:</strong> {book.publishedDate}
              </p>
            </div>
            <div className="mt-4">
              <a
                href={book.infoLink}
                className="text-blue-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                More Info
              </a>
              <br />
              <a
                href={book.previewLink}
                className="text-blue-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                Preview
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
