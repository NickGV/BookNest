export const CurrentBookCard = ({ book }) => {
  return (
    <div className="flex p-4 bg-gray-700 rounded-lg shadow-md w-full h-52 text-white relative">
      <div className="absolute top-3 right-3">
        <button className="bg-gray-600 p-1 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-4 h-4 text-gray-300"
          >
            <path d="M5 3v18l7-5 7 5V3z" />
          </svg>
        </button>
      </div>

      <div className="w-56">
        <img
          src={book.coverImage}
          alt={book.title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      <div className="ml-4">
        <h3 className="text-lg font-semibold">{book.title}</h3>
        <p className="text-sm text-gray-400 max-w-prose">{book.description}</p>
      </div>
    </div>
  );
};
