import { useState, useEffect } from "react";
import { fetchUserBooks } from "../api/bookService";
import { BookContext } from "./BookContext";

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    const loadBooks = async () => {
      if (token) {
        const userBooks = await fetchUserBooks(token);
        setBooks(userBooks);
      }
    };
    loadBooks();
  }, [token]);

  return (
    <BookContext.Provider value={{ books, setBooks }}>
      {children}
    </BookContext.Provider>
  );
};
