// Using async/await to fetch data from a public API
async function getTodos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  console.log(data);
  return data;
}

const todos = getTodos();
console.log(todos); // This will log a Promise

console.log(
  "This will log before the async function completes, demonstrating asynchronous behavior.",
);
