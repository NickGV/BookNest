import { useState, useEffect } from "react";
import { fetchUserBooks } from "../api/bookService";
import { BookContext } from "./BookContext";

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const token = localStorage.getItem("authToken");

  useEffect(() => {
    if (token) {
      loadBooks();
    }
  }, [token]);

  const loadBooks = async () => {
    if (token) {
      try {
        const userBooks = await fetchUserBooks(token);
        setBooks(userBooks);
      } catch (error) {
        console.error("Failed to load user books:", error);
      }
    }
  };

  return (
    <BookContext.Provider value={{ books, setBooks }}>
      {children}
    </BookContext.Provider>
  );
};
