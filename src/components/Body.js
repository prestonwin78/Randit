import React from 'react';
import SearchBar from './SearchBar';
import Results from './Results';
import OptionsBar from './OptionsBar';

function Body() {
  return(
    <div>
      <SearchBar />
      <Results />
      <OptionsBar />
    </div>
  )
}

export default Body;