import { book, genres } from "./Destructuring.js";

// Using rest operator to separate primary, secondary, and other genres
const [primaryGenre, secondaryGenre, ...otherGenres] = genres;
console.log(`Primary Genre: ${primaryGenre}`);
console.log(`Secondary Genre: ${secondaryGenre}`);
console.log(`Other Genres: ${otherGenres.join(", ")}`);

// Without spread operator
/*
const newGenres = ["drama", otherGenres[0], otherGenres[1], otherGenres[2]];
*/

// Using spread operator to create a new genres array
const newGenres = ["drama", ...otherGenres];
console.log(`New Genres: ${newGenres.join(", ")}`);

// Without spread operator
/*
const updatedBook = {book, moviePublicationDate: "2001-12-19"};
*/

// Using spread operator to create an updated book object
const updatedBook = {
     ...book, 
     //Adding a new property 
     moviePublicationDate: "2001-12-19", 
     //Overwriting an existing property
     pages: 1218 };
console.log(updatedBook);