import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query) {
      onSearch(query);
    }
  };

  return (
    <div className="w-full md:px-4 md:w-50 lg:w-80">
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          placeholder="Search books..."
          onChange={handleSearchChange}
          value={query}
          className="w-full bg-transparent rounded-md border border-stroke dark:border-dark-3 py-2.5 px-4 text-dark-6 outline-none transition focus:border-white focus:ring focus:ring-orange-400"
        />
        <button
          type="submit"
          className="absolute inset-y-0 right-0 px-3 py-2.5 text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
    </div>
  );
};
