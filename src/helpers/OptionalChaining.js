import { getBook } from "./Books.js";

const getTotalReviewCount = (book) => {
  // Using optional chaining and nullish coalescing to safely access nested properties
  const libraryThingCount = book.reviews?.librarything?.reviewsCount ?? 0;
  const goodreadsCount = book.reviews?.goodreads?.reviewsCount ?? 0;
  return libraryThingCount + goodreadsCount;
};

console.log(getTotalReviewCount(getBook(1)));
console.log(getTotalReviewCount(getBook(2)));
console.log(getTotalReviewCount(getBook(3)));

module.exports = { getTotalReviewCount };
