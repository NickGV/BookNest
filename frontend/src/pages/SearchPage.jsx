import { Results } from "../components/Results";
import { SearchBar } from "../components/SearchBar";
import booksData from "../data/books.json";
export const SearchPage = () => {
  return (
    <section className="flexx flex-col p-4 gap-16 text-white  max-w-screen-2xl mx-auto">
      <div className="flex justify-between mb-4">
        <div></div>
        <SearchBar />
      </div>
      <div className="p-4">
        <Results books={booksData.books} />
      </div>
    </section>
  );
};
