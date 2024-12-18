import { BookLibraryCard } from "./BookLibraryCard";
export const BookList = ({ books }) => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 gap-6">
      {books.map((book) => (
        <li key={book._id}>
          <BookLibraryCard book={book} />
        </li>
      ))}
    </ul>
  );
};
