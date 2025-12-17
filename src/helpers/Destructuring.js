import { getBook } from "./books.js";

// Destructuring the books data
const book = getBook(1);

// Without destructuring
/*
const title = book.title;
const author = book.author;
const pages = book.pages;
const publicationDate = book.publicationDate;
const genres = book.genres;
const hasMovieAdaptation = book.hasMovieAdaptation;
*/

// With destructuring
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;
console.log(`${title}, ${author}`);
console.log(`${pages} pages, published on ${publicationDate}`);
console.log(`Genres: ${genres.join(", ")}`);

// Without destructuring
/*
const primaryGenre = genres[0];
const secondaryGenre = genres[1];
*/

// With destructuring
const [primaryGenre, secondaryGenre] = genres;
console.log(`Primary Genre: ${primaryGenre}`);
console.log(`Secondary Genre: ${secondaryGenre}`);

module.exports = {
  book,
  title,
  author,
  pages,
  publicationDate,
  genres,
  hasMovieAdaptation,
};
