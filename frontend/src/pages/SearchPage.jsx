import { useState, useEffect } from "react";
import { SearchBar } from "../components/SearchBar";
import { Results } from "../components/Results";
import { fetchBooks } from "../api/bookService";

export const SearchPage = () => {
  const [books, setBooks] = useState([]);
  const [filter, setFilter] = useState("");
  const [categories, setCategories] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const savedQuery = localStorage.getItem("searchQuery");
    const savedBooks = JSON.parse(localStorage.getItem("searchBooks"));
    const savedCategories = JSON.parse(localStorage.getItem("searchCategories"));

    if (savedQuery) setQuery(savedQuery);
    if (savedBooks) setBooks(savedBooks);
    if (savedCategories) setCategories(savedCategories);
  }, []);

  const onSearch = async (query) => {
    setQuery(query);
    localStorage.setItem("searchQuery", query);

    const fetchedBooks = await fetchBooks(query);
    setBooks(fetchedBooks || []);
    localStorage.setItem("searchBooks", JSON.stringify(fetchedBooks || []));

    const allCategories = fetchedBooks
      .flatMap(book => book.volumeInfo.categories || [])
      .filter((value, index, self) => self.indexOf(value) === index);
    setCategories(allCategories);
    localStorage.setItem("searchCategories", JSON.stringify(allCategories));
  };

  const filteredBooks = filter
    ? books.filter(book => book.volumeInfo.categories?.includes(filter))
    : books;

  return (
    <section className="flex flex-col p-4 text-white max-w-screen-2xl mx-auto">
      <div className="flex flex-col-reverse sm:flex-row justify-between items-center">
        <div className="px-8 flex mb-4 sm:mb-0">
          <select
            onChange={(e) => setFilter(e.target.value)}
            className="bg-gray-800 text-white p-2"
          >
            <option value="">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
        <SearchBar onSearch={onSearch} />
      </div>
      <div className="p-4 mt-4 sm:mt-8">
        <Results books={filteredBooks} />
      </div>
    </section>
  );
};
