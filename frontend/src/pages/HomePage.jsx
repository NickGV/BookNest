import {
  faBook,
  faUser,
  faHatWizard,
  faSuitcase,
  faRocket,
  faChild,
} from "@fortawesome/free-solid-svg-icons";
import { CategoryCard } from "../components/CategoryCard";
import { FeaturedBookCard } from "../components/FeaturedBookCard";
import booksData from "../data/books.json";
import { CurrentBookCard } from "../components/CurrentBookCard";

export const HomePage = () => {
  const featuredBooks = booksData.books.slice(0, 4);
  const readingBooks = booksData.books.filter(
    (book) => book.status === "reading"
  );

  return (
    <section className="flex flex-col p-4 gap-16 text-white  max-w-screen-2xl mx-auto">
      <article>
        <h2 className="text-3xl font-bold mb-4">Featured Books</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredBooks.map((book) => (
            <FeaturedBookCard key={book.id} book={book} />
          ))}
        </ul>
      </article>

      <article>
        <h2 className="text-3xl font-bold mb-4">Categories</h2>
        <ul className="flex flex-wrap gap-4">
          <CategoryCard icon={faBook} name="Fiction" />
          <CategoryCard icon={faUser} name="Non-Fiction" />
          <CategoryCard icon={faHatWizard} name="Mystery & Thriller" />
          <CategoryCard icon={faChild} name="Children's Books" />
          <CategoryCard icon={faSuitcase} name="Business & Investing" />
          <CategoryCard icon={faRocket} name="Science Fiction" />
        </ul>
      </article>

      <article>
        <h2 className="text-3xl font-bold mb-4">My Reading Progress</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {readingBooks.map((book) => (
            <CurrentBookCard key={book.id} book={book} />
          ))}
        </ul>
      </article>
    </section>
  );
};
