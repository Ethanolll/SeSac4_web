import React from "react";
import ReactDOM from "react-dom/client";
import JSX from "./JSX/JSX";
import JSXTest from "./JSX_Test/JSXTest";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <JSX />
    <JSXTest />
  </React.StrictMode>
);
