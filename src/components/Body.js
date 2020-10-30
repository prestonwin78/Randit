import React from 'react';
import SearchBar from './SearchBar';
import Results from './Results';
import OptionsBar from './OptionsBar';
import "../styles/styles.css";

function Body() {
  return(
    <div className="body">
      <SearchBar />
      <Results />
      <OptionsBar />
    </div>
  );
}

export default Body;