import React from 'react';
import '../styles/searchbar.css';

function SearchBar() {
  return (
    <div className="row d-flex justify-content-center searchbar">
      <button className="btn bg-info text-light">Search</button>
    </div>
  )
}

export default SearchBar;