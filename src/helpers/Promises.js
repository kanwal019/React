// Using fetch to get data from a public API, this is a placeholder for promise-based operations
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((data) => console.log(data));

console.log(
  "This will log before the fetch completes, demonstrating asynchronous behavior.",
);
