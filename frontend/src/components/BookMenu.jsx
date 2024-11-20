import { saveBook, deleteBook, updateBook } from "../api/bookService";
import { useContext, useState } from "react";
import { BookContext } from "../context/BookContext";

export const BookMenu = ({ book }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setBooks } = useContext(BookContext);
  const token = localStorage.getItem("authToken");

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleSave = async () => {
    const newBook = {
      title: book.volumeInfo.title,
      description: book.volumeInfo.description || "No description",
      author: book.volumeInfo.authors?.join(", "),
      categories: book.volumeInfo.categories[0] || "Uncategorized",
      coverImage: book.volumeInfo.imageLinks?.thumbnail || "",
      status: "to-read",
    };
    const savedBook = await saveBook(token, newBook);
    setBooks((prev) => [...prev, savedBook]);
  };

  const handleDelete = async (id) => {
    await deleteBook(token, id);
    setBooks((prev) => prev.filter((book) => book._id !== id));
  };

  const handleUpdate = async (id, status) => {
    const updatedBook = await updateBook(token, id, status);
    setBooks((prev) =>
      prev.map((book) => (book._id === id ? updatedBook : book))
    );
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="p-2 bg-gray-700 text-white rounded-full focus:outline-none group-hover:bg-gray-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zm6 0a2 2 0 11-4 0 2 2 0 014 0zm6 0a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      </button>

      {isMenuOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-gray-800 text-white rounded-lg shadow-lg">
          <ul className="py-2">
            <li
              onClick={() => {
                handleSave(book);
                setIsMenuOpen(false);
              }}
              className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
            >
              Add to My Books
            </li>
            <li
              onClick={() => {
                const newStatus = prompt("Enter new status:", book.status);
                if (newStatus) {
                  handleUpdate(book, newStatus);
                }
                setIsMenuOpen(false);
              }}
              className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
            >
              Change Status
            </li>
            <li
              onClick={() => {
                handleDelete(book);
                setIsMenuOpen(false);
              }}
              className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
            >
              Delete
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
