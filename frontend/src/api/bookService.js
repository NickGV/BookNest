export const fetchBooks = async (query) => {
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${query}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  console.log(data.items)
  return data.items;
};
