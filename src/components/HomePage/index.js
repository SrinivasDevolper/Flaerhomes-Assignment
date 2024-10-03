import React from "react";
import { Link } from "react-router-dom";
import BooksList from "../JsonList";
import { useBookName } from "../searchCont";
import "./index.css";

const colorsList = ["#ffb0ca", "#f6b0ff", "#b0b5ff", "#b0e6ff", "#b0ffce"];

const HomeBooksPage = () => {
  const { books } = BooksList;
  const { bookName, setBookName } = useBookName();
  const filteredBooks = books.filter((eachBook) =>
    eachBook.title.toLowerCase().includes(bookName.toLowerCase())
  );
  return (
    <div className="main-container">
      <form onSubmit={(e) => e.preventDefault()} className="search-cont">
        <input
          type="search"
          name="title"
          placeholder="Search for title"
          id="title"
          value={bookName}
          onChange={(e) => setBookName(e.target.value)}
        />
        <button>Search</button>
      </form>
      {filteredBooks.length === 0 && (
        <h1 style={{ textAlign: "center", color: "red" }}>Failed Search</h1>
      )}
      <ul className="books-container">
        {filteredBooks.map((eachData) => {
          const { id, title, author, rating, genre } = eachData;
          const backgroundColor = colorsList[id - 1];
          return (
            <Link key={id} className="link-card" to={`/book/${id}`}>
              <li>
                <div className="list-content">
                  <div style={{ backgroundColor: backgroundColor }}>
                    <h2>{title}</h2>
                  </div>
                  <h3>{author}</h3>
                  <h4>{genre}</h4>
                  <p>{rating}</p>
                </div>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default HomeBooksPage;
