import React from "react";
import JsonList from "../JsonList";
import { useParams } from "react-router-dom";
import { useLibrary } from "../libraryCont";
import "./index.css";

function BookDetails() {
  const { libraryList, setLibraryList } = useLibrary();
  const { books } = JsonList;
  const { bookId } = useParams();
  const findBook = books.find((eachBook) => eachBook.id == bookId);
  const { title, author, genre, rating, description, publication_year } =
    findBook;
  const someBookId = libraryList.some((eachBook) => eachBook.id == bookId);
  const onClickedAdd = () => {
    if (!someBookId) {
      setLibraryList((prevState) => [...prevState, findBook]);
    }
  };
  console.log(someBookId, "someId");
  return (
    <div className="book-details-container">
      <div className="card">
        <div className="image-cont">
          <h1>{title}</h1>
        </div>
        <div className="image-content-cont">
          <h1>{title}</h1>
          <div>
            <h4>
              Author: <span>{author}</span>
            </h4>
            <h4>
              Genre: <span>{genre}</span>
            </h4>
            <h4>
              Rating: <span>{rating}</span>
            </h4>
            <h4>
              Publication_year: <span>{publication_year}</span>
            </h4>
          </div>
          <hr />
          <p className="desc">{description}</p>
        </div>
        <div className="button-cont">
          <button className="button" onClick={onClickedAdd}>
            {someBookId ? "ADDED" : "ADD +"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
