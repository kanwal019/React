import {
  title,
  author,
  pages,
  publicationDate,
  genres,
  hasMovieAdaptation,
} from "./Destructuring.js";

// Using ternary operator to determine page range
const pageRange = pages > 1000 ? "over a thousand" : "less than a thousand";
console.log(`This book has ${pageRange} pages.`);

// Using template literals as well as ternary operator to create a summary of the book
const summary = `${title} by ${author} is a ${pages}-page book published in ${publicationDate.split("-")[0]}. It belongs to the genres: ${genres.join(", ")}. The book has ${hasMovieAdaptation ? "" : "not"} been adapted as a movie.`;
console.log(summary);
