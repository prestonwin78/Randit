import React from "react";
import "../styles/searchbar.css";

function SearchBar(props) {
  return (
    <div className="row d-flex justify-content-center searchbar">
      <div className="col-12">
        <button className="btn bg-info text-light" onClick={props.search}>
          Search
        </button>
      </div>
      <div className="subtext-container">
        <p className="btn-subtext">
          Click the button to search through Reddit for a random word.
        </p>
      </div>
    </div>
  );
}

export default SearchBar;
