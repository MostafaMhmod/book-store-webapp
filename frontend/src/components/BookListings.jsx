import { useState, useEffect } from "react";
import BookListing from "./BookListing";
import Spinner from "./Spinner";

const BookListings = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchAuthor, setSearchAuthor] = useState("");
  const [searchQuery, setSearchQuery] = useState({ title: "", author: "" });
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 10;

  const fetchBooks = async (query = {}) => {
    setLoading(true);
    let apiUrl = "http://127.0.0.1:8000/api/books";

    if (query.title || query.author) {
      const searchParams = new URLSearchParams();
      if (query.title) searchParams.append("title", query.title);
      if (query.author) searchParams.append("author", query.author);
      apiUrl += `/search?${searchParams.toString()}`;
    }

    try {
      const res = await fetch(apiUrl);
      const data = await res.json();
      setBooks(data);
    } catch (error) {
      console.log("Error fetching data", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleSearch = () => {
    setSearchQuery({ title: searchTitle, author: searchAuthor });
    fetchBooks({ title: searchTitle, author: searchAuthor });
    setCurrentPage(1); // Reset to the first page on new search
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  // Calculate the books to be displayed based on the current page
  const displayedBooks = books.slice(0, currentPage * booksPerPage);

  return (
      <section className="bg-blue-50 px-4 py-10">
        <div className="text-center">
          <input
            type="text"
            id="searchTitle"
            name="searchTitle"
            className="border rounded py-1 px-2 mb-2 mr-1"
            placeholder="Search by title"
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <input
            type="text"
            id="searchAuthor"
            name="searchAuthor"
            className="border rounded py-1 px-2 mb-2 mr-1"
            placeholder="Search by author"
            value={searchAuthor}
            onChange={(e) => setSearchAuthor(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            onClick={handleSearch}
            className="inline-block bg-black text-white rounded-lg py-1 px-2 mb-2 hover:bg-gray-700"
          >
            Search
          </button>
        </div>

        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center"></h2>

          {loading ? (
            <Spinner loading={loading} />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {displayedBooks.map((book) => (
                <BookListing key={book.id} book={book} />
              ))}
            </div>
          )}
        </div>
        {currentPage * booksPerPage < books.length && (
          <section className="m-auto max-w-xs my-5 px-1">
            <button
              onClick={handleNextPage}
              className="block bg-black hover:bg-gray-700 text-white text-center font-bold py-2 px-4 rounded-full w-full"
            >
              Next
            </button>
          </section>
        )}
      </section>
  );
};

export default BookListings;
