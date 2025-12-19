import { getBooks } from "./Books.js";

const books = getBooks();
const arr = [5, 3, 8, 1, 2];

// Sorting the array in ascending order
const sortedAsc = arr.sort((a, b) => a - b);
console.log("Sorted Ascending:", sortedAsc);

// Sorting the array in descending order
const sortedDesc = arr.sort((a, b) => b - a);
console.log("Sorted Descending:", sortedDesc);

// Sorting books by number of pages in ascending order
const booksSortedByPagesAsc = books.slice().sort((a, b) => a.pages - b.pages);
console.log("Books Sorted by Pages (Ascending):", booksSortedByPagesAsc);

/* Note: Using slice() to create a shallow copy of the books array
   before sorting to avoid mutating the original array. */
