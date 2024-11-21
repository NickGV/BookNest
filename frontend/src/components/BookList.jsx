import {BookLibraryCard} from './BookLibraryCard';
export const BookList = ({ books }) => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {books.map((book) => (
        <li key={book._id}>
          <BookLibraryCard book={book} />
        </li>
      ))}
    </ul>
  );
};
