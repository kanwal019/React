import { getBooks } from "./Books.js";
import { getTotalReviewCount } from "./OptionalChaining.js";

// Using map to extract titles and authors from the books array
const books = getBooks();
const titles = books.map((book) => book.title);
const authors = books.map((book) => book.author);

const essentialInfo = books.map((book) => ({
     title: book.title, 
     author: book.author,
     reviewsCount: getTotalReviewCount(book)
    }));

console.log("Titles:", titles);
console.log("Authors:", authors);
console.log("Essential Info:", essentialInfo);