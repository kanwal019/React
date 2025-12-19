import {
  title,
  author,
  pages,
  publicationDate,
  genres,
  hasMovieAdaptation,
} from "./Destructuring.js";

// Traditional function to extract year from publication date
/*
function getYear(str){
    return str.split("-")[0];
}
*/

// Arrow function to extract year from publication date
const getYear = (str) => str.split("-")[0];
console.log(getYear(publicationDate));

// Using template literals, ternary operator and arrow functions to create a summary of the book
const summary = `${title} by ${author} is a ${pages}-page book published in ${getYear(publicationDate)}. It belongs to the genres: ${genres.join(", ")}. The book has ${hasMovieAdaptation ? "" : "not"} been adapted as a movie.`;
console.log(summary);

module.exports = { getYear };
