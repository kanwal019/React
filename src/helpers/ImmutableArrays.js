import { getBooks } from "./Books.js";

// Demonstrating immutability by creating a new array with an added book
const books = getBooks();
const newBook = {
  id: 999,
  title: "New Immutable Book",
  author: "Immutable Author",
  pages: 300,
  publicationDate: "2024-01-01",
  genres: ["fiction"],
  hasMovieAdaptation: false,
};
const updatedBooks = [...books, newBook];

console.log("Original Books Array:", books);
console.log("Updated Books Array with New Book:", updatedBooks);

// Demonstrating immutability by removing a book from the array
const bookIdToRemove = 1;
const booksAfterRemoval = books.filter((book) => book.id !== bookIdToRemove);
console.log("Original Books Array:", books);
console.log("Books Array after Removal:", booksAfterRemoval);

// Demonstrating immutability by updating a book's details
const bookIdToUpdate = 2;
const booksAfterUpdate = books.map((book) =>
  book.id === bookIdToUpdate
    ? { ...book, title: "Updated Immutable Title" }
    : book,
);
console.log("Original Books Array:", books);
console.log("Books Array after Update:", booksAfterUpdate);
