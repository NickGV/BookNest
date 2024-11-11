import { useState } from "react";
import { SearchBar } from "../components/SearchBar";
import { Results } from "../components/Results";
import { fetchBooks } from "../api/bookService";

export const SearchPage = () => {
  const [books, setBooks] = useState([]);

  const onSearch = async (query) => {
    const fetchedBooks = await fetchBooks(query);
    setBooks(fetchedBooks || []);
  };

  return (
    <section className="flex flex-col p-4 text-white max-w-screen-2xl mx-auto">
      <div className="flex flex-col-reverse sm:flex-row justify-between items-center">
        <div className="px-8 flex mb-4 sm:mb-0">
          {/* <select
            onChange={(e) => setFilter(e.target.value)}
            className="bg-gray-800 text-white p-2"
          >
            <option value="">All Categories</option>
            <option value="Classic">Classic</option>
            <option value="Dystopian">Dystopian</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Romance">Romance</option>
            <option value="Science Fiction">Science Fiction</option>
            <option value="Philosophy">Philosophy</option>
            <option value="Adventure">Adventure</option>
          </select> */}
        </div>
        <SearchBar onSearch={onSearch} />
      </div>
      <div className="p-4 mt-4 sm:mt-8">
        <Results books={books} />
      </div>
    </section>
  );
};
