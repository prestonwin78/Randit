import React from "react";
import "../styles/searchbar.css";

function SearchBar(props) {
  return (
    <div className="row d-flex justify-content-center searchbar">
      <button className="btn bg-info text-light" onClick={props.search}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
