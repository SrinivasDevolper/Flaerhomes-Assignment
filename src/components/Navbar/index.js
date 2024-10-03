import React from "react";
import "./index.css";
import { NavLink } from "react-router-dom";
import { useBookName } from "../searchCont";

const NavBar = () => {
  const { bookName, setBookName } = useBookName();
  return (
    <div className="navbar">
      <h1>Virtual Book Library</h1>
      <form onSubmit={(e) => e.preventDefault()} className="search-cont-sm">
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
      <nav>
        <NavLink className="navLink" to="/">
          <p>Home</p>
        </NavLink>
        <NavLink className="navLink" to="/library">
          <p>Library</p>
        </NavLink>
      </nav>
    </div>
  );
};

export default NavBar;
