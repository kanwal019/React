import { getBooks } from "./Books.js";

const books = getBooks();

// Using reduce to calculate the total number of pages in all books
const pagesAllBooks = books.reduce((total, book) => total + book.pages, 0);
console.log("Total pages in all books:", pagesAllBooks);