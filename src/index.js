import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./components/use-popcorn/App.js";
import StarRating from "./components/use-popcorn/StarRating.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/*<App />*/}
    <StarRating maxRating={5} />
  </React.StrictMode>
);
