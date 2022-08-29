import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";

import "@styles/main.css";
import "@styles/main.styl";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// import Template from "@templates/Template.js";

// (async function App() {
//   const main = null || document.getElementById("main");
//   main.innerHTML = await Template();
// })();
