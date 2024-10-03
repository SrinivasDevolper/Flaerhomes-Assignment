import React from "react";
import { useLibrary } from "../libraryCont";
import "./index.css";

const colorsList = ["#ffb0ca", "#f6b0ff", "#b0b5ff", "#b0e6ff", "#b0ffce"];

function LibraryPage() {
  const { libraryList, setLibraryList } = useLibrary();
  console.log(libraryList, "libraryList");
  const onClickDelete = (id) => {
    const deleteBook = libraryList.filter(
      (eachDelBook) => eachDelBook.id !== id
    );
    setLibraryList(deleteBook);
  };
  console.log(libraryList.length, "libraryList");
  return (
    <div>
      <h2 style={{ marginTop: "15px" }}>Library Page</h2>
      {libraryList.length === 0 && (
        <h1 style={{ color: "tomato", textAlign: "center" }}>Empty Library</h1>
      )}
      <ul className="books-container-library">
        {libraryList.map((eachData) => {
          const { id, title, author, rating, genre } = eachData;
          const backgroundColor = colorsList[id - 1];
          return (
            <li key={id}>
              <div className="list-content">
                <div style={{ backgroundColor: backgroundColor }}>
                  <h2>{title}</h2>
                </div>
                <h3>{author}</h3>
                <h4>{genre}</h4>
                <p>{rating}</p>
              </div>
              <button
                className="delete-button"
                onClick={() => onClickDelete(id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default LibraryPage;
