import React from "react";
import "./index.css";
import App from "./App";
import ReactDOM from "react-dom/client";

const container = document.getElementById("root");

// Create a root.
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
