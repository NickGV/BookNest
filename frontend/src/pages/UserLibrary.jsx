import { useState } from "react";
import { BookList } from "../components/BookList";
import booksData from "../data/books.json";

export const UserLibrary = () => {
  const [filter, setFilter] = useState("All");

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredBooks = booksData.books.filter((book) => {
    if (filter === "All") return true;
    return book.status === filter;
  });

  return (
    <section className="flex flex-col p-4 gap-16 text-white max-w-screen-2xl mx-auto">
      <h1>User Library</h1>

      <div>
        <ul className="flex gap-4">
          {["All", "reading", "desired", "read", "to-read"].map((status) => (
            <li key={status} className={`cursor-pointer px-4 py-2 rounded-lg transition-colors duration-200 ${filter === status ? 'bg-blue-500 text-white font-bold' : 'bg-gray-700 text-gray-300 hover:bg-blue-600'}`} onClick={() => handleFilterChange(status)}>
              {status}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <BookList books={filteredBooks} />
      </div>
    </section>
  );
};
