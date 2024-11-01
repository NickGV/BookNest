export const FeaturedBookCard = ({ book }) => {
  return (
    <div className="p-4 bg-gray-800 rounded-lg shadow-lg w-full text-white relative hover:shadow-xl transition-shadow duration-300 cursor pointer">
      <div className="relative mb-4 w-full h-40 overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300">
        <img
          className="w-full h-full object-cover"
          src={book.coverImage}
          alt={book.title}
        />
        {/* Author Badge */}
        <div className="absolute bottom-2 left-2 flex items-center bg-gray-700 bg-opacity-70 px-2 py-1 rounded-full text-sm">
          <span>{book.author}</span>
        </div>
        {/* Favorite Icon */}
        <div className="absolute top-2 right-2">
          <button className="bg-gray-700 bg-opacity-70 p-1 rounded-full hover:bg-opacity-80 transition-opacity duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 15l7-7 7 7"
              />
            </svg>
          </button>
        </div>
      </div>
      <h3 className="text-lg font-semibold">{book.title}</h3>
      <div className="flex items-center text-gray-400 text-sm mt-2">
        <div className="flex items-center mr-4">
          <span>{book.genre}</span>
        </div>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-4 h-4 mr-1"
          >
            <path d="M12 17.27L18.18 21 16.54 14 22 9.24 15.09 8.63 12 2 8.91 8.63 2 9.24 7.46 14 5.82 21z" />
          </svg>
          <span>{book.rating}</span>
        </div>
      </div>
    </div>
  );
};
