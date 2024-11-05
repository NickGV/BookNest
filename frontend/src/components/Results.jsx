export const Results = ({ books }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {books.map((book) => (
        <div
          key={book.id}
          className="bg-gray-700 text-white p-4 rounded-lg shadow-lg flex flex-col justify-between relative hover:bg-gray-800 transition-all duration-300 w-full h-[33rem]"
        >
          <div className="h-96 w-full">
            <img
              src={book.coverImage}
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col items-center text-center mt-4">
            <h2 className="text-lg font-semibold mb-1">{book.title}</h2>
            <p className="text-sm text-gray-400 mb-1">{book.author}</p>
            <p className="text-sm text-gray-400 mb-2">{book.genre}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
