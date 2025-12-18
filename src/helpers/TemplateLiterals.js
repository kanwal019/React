import { title, author, pages, publicationDate, genres } from "./Destructuring.js";

// Using template literals to create a summary of the book
const summary = `${title} by ${author} is a ${pages}-page book published in ${publicationDate.split("-")[0]}. It belongs to the genres: ${genres.join(", ")}.`;

console.log(summary);