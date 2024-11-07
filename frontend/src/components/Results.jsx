import { useState } from "react";
import { BookCard } from "./BookCard";

export const Results = ({ books }) => {
 
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {books.length === 0 ? (
        <p className="text-center text-gray-400">No results found</p>
      ) : (
        books.map((book) => (
         <BookCard key={book.id} book={book} />
        ))
      )}
    </div>
  );
};
