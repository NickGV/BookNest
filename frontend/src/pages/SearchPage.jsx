import { Results } from "../components/Results";
import { SearchBar } from "../components/SearchBar";
import booksData from "../data/books.json";
import { useState } from "react";

export const SearchPage = () => {
  const [filter, setFilter] = useState("");

  const filteredBooks = booksData.books.filter((book) =>
    filter ? book.genre === filter : true
  );

  return (
    <section className="flex flex-col p-4 text-white max-w-screen-2xl mx-auto">
      <div className="flex justify-between  items-center  ">
        <div className="px-8 flex">
          <select
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
          </select>
        </div>
        <SearchBar />
      </div>
      <div className="p-4">
        <Results books={filteredBooks} />
      </div>
    </section>
  );
};
