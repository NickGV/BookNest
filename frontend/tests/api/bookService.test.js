import {
fetchBooks,
fetchBookById,
fetchBooksByCategory,
fetchUserBooks,
saveBook,
updateBook,
deleteBook,
} from "../../src/api/bookService";

describe("bookService", () => {
beforeEach(() => {
  fetch.resetMocks();
});

describe("fetchBooks", () => {
  it("should fetch books based on query", async () => {
    const mockQuery = "javascript";
    const mockResponse = { items: [{ id: "1", title: "JavaScript: The Good Parts" }] };

    fetch.mockResponseOnce(JSON.stringify(mockResponse));

    const result = await fetchBooks(mockQuery);

    expect(result).toEqual(mockResponse.items);
    expect(fetch).toHaveBeenCalledWith(
      `https://www.googleapis.com/books/v1/volumes?q=${mockQuery}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  });
});

describe("fetchBookById", () => {
  it("should fetch book by id", async () => {
    const mockId = "1";
    const mockResponse = { id: "1", title: "JavaScript: The Good Parts" };

    fetch.mockResponseOnce(JSON.stringify(mockResponse));

    const result = await fetchBookById(mockId);

    expect(result).toEqual(mockResponse);
    expect(fetch).toHaveBeenCalledWith(`https://www.googleapis.com/books/v1/volumes/${mockId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  });
});

describe("fetchBooksByCategory", () => {
  it("should fetch books by category", async () => {
    const mockCategory = "programming";
    const mockResponse = { items: [{ id: "1", title: "JavaScript: The Good Parts" }] };

    fetch.mockResponseOnce(JSON.stringify(mockResponse));

    const result = await fetchBooksByCategory(mockCategory);

    expect(result).toEqual(mockResponse.items);
    expect(fetch).toHaveBeenCalledWith(
      `https://www.googleapis.com/books/v1/volumes?q=subjet:${mockCategory}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  });
});

describe("fetchUserBooks", () => {
  it("should fetch user books", async () => {
    const mockToken = "mockToken";
    const mockResponse = [{ id: "1", title: "JavaScript: The Good Parts" }];

    fetch.mockResponseOnce(JSON.stringify(mockResponse));

    const result = await fetchUserBooks(mockToken);

    expect(result).toEqual(mockResponse);
    expect(fetch).toHaveBeenCalledWith("http://localhost:3000/api/books", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${mockToken}`,
      },
    });
  });
});

describe("saveBook", () => {
  it("should save a book", async () => {
    const mockToken = "mockToken";
    const mockBook = { title: "JavaScript: The Good Parts" };
    const mockResponse = { id: "1", ...mockBook };

    fetch.mockResponseOnce(JSON.stringify(mockResponse));

    const result = await saveBook(mockToken, mockBook);

    expect(result).toEqual(mockResponse);
    expect(fetch).toHaveBeenCalledWith("http://localhost:3000/api/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${mockToken}`,
      },
      body: JSON.stringify(mockBook),
    });
  });
});

describe("updateBook", () => {
  it("should update a book", async () => {
    const mockToken = "mockToken";
    const mockBookId = "1";
    const mockStatus = "read";
    const mockResponse = { id: "1", status: "read" };

    fetch.mockResponseOnce(JSON.stringify(mockResponse));

    const result = await updateBook(mockToken, mockBookId, mockStatus);

    expect(result).toEqual(mockResponse);
    expect(fetch).toHaveBeenCalledWith(`http://localhost:3000/api/books/${mockBookId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${mockToken}`,
      },
      body: JSON.stringify({ status: mockStatus }),
    });
  });
});

describe("deleteBook", () => {
  it("should delete a book", async () => {
    const mockToken = "mockToken";
    const mockBookId = "1";
    const mockResponse = { success: true };

    fetch.mockResponseOnce(JSON.stringify(mockResponse));

    const result = await deleteBook(mockToken, mockBookId);

    expect(result).toEqual(mockResponse);
    expect(fetch).toHaveBeenCalledWith(`http://localhost:3000/api/books/${mockBookId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${mockToken}`,
      },
    });
  });
});
});