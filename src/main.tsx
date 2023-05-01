import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./store/auth-context";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthContextProvider>
  </React.StrictMode>
);
