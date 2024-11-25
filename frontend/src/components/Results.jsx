import { BookCard } from "./BookCard";

export const Results = ({ books }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 gap-6">
      {books.length === 0 ? (
        <p className="text-center text-gray-400">No results found</p>
      ) : (
        books.map((book) => <BookCard key={book.id} book={book} />)
      )}
    </div>
  );
};
