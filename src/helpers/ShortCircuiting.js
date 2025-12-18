import {
  title,
  book,
  hasMovieAdaptation,
} from "./Destructuring.js";

import { getBook } from "./books.js";

// Using short-circuiting to log messages based on conditions
console.log(true && "This will be logged");
console.log(false && "This will not be logged");
console.log(hasMovieAdaptation && `${title} has a movie adaptation.`);

console.log(false || "This will be logged");
console.log(true || "This will not be logged");
console.log(undefined || "This will be logged");
console.log(0 || "This will be logged");
console.log(null || "This will be logged");
console.log("" || "This will be logged");
console.log("Hello" || "This will not be logged");

console.log(false && "This will not be logged");
console.log(true && "This will be logged");
console.log(undefined && "This will not be logged");
console.log(0 && "This will not be logged");
console.log(null && "This will not be logged");
console.log("" && "This will not be logged");
console.log("Hello" && "This will be logged");

// Example of using short-circuiting to provide default values
const spanishTranslation = book.translations.spanish || "No Spanish translation available";
console.log(spanishTranslation);

// Example of using nullish coalescing to safely access nested properties
const countWrong = getBook(3).reviews.librarything?.reviewsCount ?? "No LibraryThing reviews available";
const countRight = getBook(3).reviews.goodreads?.reviewsCount ?? "No Goodreads reviews available";
console.log(countWrong);
console.log(countRight);