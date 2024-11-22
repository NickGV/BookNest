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
  console.log(data.items);
  return data.items;
};

const API_URL = "http://localhost:3000/api";

export const fetchUserBooks = async (token) => {
  const response = await fetch(`${API_URL}/books`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch user books");
  }
  return response.json();
};

export const saveBook = async (token, book) => {
  const response = await fetch(`${API_URL}/books`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(book),
  });
  if (!response.ok) {
    throw new Error("Failed to save book");
  }
  return response.json();
};

export const updateBook = async (token, bookId, status) => {
  const response = await fetch(`${API_URL}/books/${bookId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ status }),
  });
  if (!response.ok) {
    throw new Error("Failed to update book");
  }
  return response.json();
};

export const deleteBook = async (token, bookId) => {
  const response = await fetch(`${API_URL}/books/${bookId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error("Failed to delete book");
  }
  return response.json();
};
