import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { SearchedCont } from "./components/searchCont";
import { LibraryProvider } from "./components/libraryCont";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <LibraryProvider>
        <SearchedCont>
          <App />
        </SearchedCont>
      </LibraryProvider>
    </BrowserRouter>
  </React.StrictMode>
);
