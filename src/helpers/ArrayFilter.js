import { getBooks } from "./Books.js";
import { getYear } from "./ArrowFunctions.js";

const books = getBooks();

// Using filter to get books with more than 500 pages
const longBooks = books.filter((book) => book.pages > 500);
console.log("Books with more than 500 pages:", longBooks);

// Using filter to get books published before the year 2000
const classicBooks = books.filter(
  (book) => getYear(book.publicationDate) < 2000,
);
console.log("Books published before 2000:", classicBooks);

// Using filter to get books that have a movie adaptation
const booksWithMovies = books.filter((book) => book.hasMovieAdaptation);
console.log("Books with movie adaptations:", booksWithMovies);

// Using filter to get books in the 'science fiction' genre
const sciFiBooks = books.filter((book) =>
  book.genres.includes("science fiction"),
);
console.log("Science Fiction books:", sciFiBooks);

// Using filter to get books in the 'science fiction' genre with more than 500 pages
const longSciFiBooks = books
.filter((book) => book.genres.includes("science fiction"))
.filter((book) => book.pages > 500);
console.log("Science Fiction books with more than 500 pages:", longSciFiBooks);