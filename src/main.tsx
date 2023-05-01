import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import "./index.css";
import Header from "./components/Header";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Header />
    <App />
  </React.StrictMode>
);