import { saveBook, deleteBook, updateBook } from "../api/bookService";
import { useContext, useState } from "react";
import { BookContext } from "../context/BookContext";
import { toast } from "sonner";

export const BookMenu = ({ book }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isStatusMenuOpen, setIsStatusMenuOpen] = useState(false);
  const { books, setBooks } = useContext(BookContext);
  const token = localStorage.getItem("authToken");

  const isBookAdded =
    Array.isArray(books) && books.some((b) => b.title === book.title);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleSave = async () => {
    const newBook = {
      title: book.title,
      subtitle: book.subtitle || "No subtitle",
      description: book.description || "No description",
      author: book.author,
      categories: book.categories || "Uncategorized",
      coverImage: book.coverImage || "",
      pageCount: book.pageCount || 0,
      infoLink: book.infoLink || "",
      previewLink: book.previewLink || "",
      publishedDate: book.publishedDate || "",
      status: "to-read",
    };
    const savedBook = await saveBook(token, newBook);
    toast.success("Book added to your library");
    setBooks((prev) => [...prev, savedBook]);
  };

  const handleDelete = async (id) => {
    await deleteBook(token, id);
    setBooks((prev) => prev.filter((book) => book._id !== id));
    toast.success("Book removed from your library");
  };

  const handleUpdate = async (id, status) => {
    const updatedBook = await updateBook(token, id, status);
    setBooks((prev) =>
      prev.map((book) => (book._id === id ? updatedBook : book))
    );
    toast.success(`Status updated to ${status}`);
  };

  const statusColors = {
    reading: "bg-blue-500 hover:bg-blue-600",
    desired: "bg-yellow-500 hover:bg-yellow-600",
    read: "bg-green-500 hover:bg-green-600",
    "to-read": "bg-red-500 hover:bg-red-600",
  };

  return (
    <div className="relative z-10">
      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleMenu();
        }}
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
              onClick={(e) => {
                e.stopPropagation();

                if (isBookAdded) {
                  handleDelete(book._id);
                } else {
                  handleSave(book);
                }
                setIsMenuOpen(false);
              }}
              className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
            >
              {isBookAdded ? "Remove from My Books" : "Add to My Books"}
            </li>
            <li
              onClick={(e) => {
                e.stopPropagation();
                setIsStatusMenuOpen((prev) => !prev);
              }}
              className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
            >
              Change Status
            </li>
            {isStatusMenuOpen && (
              <ul className="absolute right-0 mt-2 w-40 bg-gray-800 text-white rounded-lg shadow-lg">
                {["reading", "desired", "read", "to-read"].map((status) => (
                  <li
                    key={status}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleUpdate(book._id, status);
                      setIsStatusMenuOpen(false);
                      setIsMenuOpen(false);
                    }}
                    className={`px-4 py-2 cursor-pointer ${
                      statusColors[status]
                    } ${
                      book.status === status
                        ? "font-bold border border-white"
                        : ""
                    }`}
                  >
                    {status}
                  </li>
                ))}
              </ul>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};
