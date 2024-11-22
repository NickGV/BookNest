import { useContext, useEffect, useState } from "react";
import { BookContext } from "../context/BookContext";
import { fetchBooks } from "../api/bookService";
import { FeaturedBookCard } from "../components/FeaturedBookCard";
import { CategoryCard } from "../components/CategoryCard";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { CurrentBookCard } from "../components/CurrentBookCard";

export const HomePage = () => {
  const { books } = useContext(BookContext);
  const [featuredBooks, setFeaturedBooks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const readingBooks = books.filter((book) => book.status === "reading");
  console.log(readingBooks);

  useEffect(() => {
    const userCategories = books
      .flatMap((book) => book.categories.split(", "))
      .filter((value, index, self) => self.indexOf(value) === index);

    setCategories(userCategories);

    const fetchFeaturedBooks = async () => {
      const allFeaturedBooks = [];
      for (const category of userCategories) {
        const fetchedBooks = await fetchBooks(category);
        allFeaturedBooks.push(...fetchedBooks);
      }
      setFeaturedBooks(allFeaturedBooks.slice(0, 4));
      setLoading(false);
    };

    fetchFeaturedBooks();
  }, [books]);

  if (loading) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <section className="flex flex-col p-4 gap-16 text-white max-w-screen-2xl mx-auto">
      <article>
        <h2 className="text-3xl font-bold mb-4">Featured Books</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredBooks.map(
            (book) =>
              book.volumeInfo && <FeaturedBookCard key={book.id} book={book} />
          )}
        </ul>
      </article>

      <article>
        <h2 className="text-3xl font-bold mb-4">Categories</h2>
        <ul className="flex flex-wrap gap-4">
          {categories.map((category) => (
            <CategoryCard key={category} icon={faBook} name={category} />
          ))}
        </ul>
      </article>

      <article>
        <h2 className="text-3xl font-bold mb-4">Currently Reading</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {readingBooks.map((book) => (
            <CurrentBookCard key={book.id} book={book} />
          ))}
        </ul>
      </article>
    </section>
  );
};
