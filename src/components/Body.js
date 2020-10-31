import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Results from "./Results";
import OptionsBar from "./OptionsBar";

function Body() {
  const [searchTerm, changeSearchTerm] = useState("");
  const [results, updateResults] = useState("");
  return (
    <div className="body">
      <SearchBar search={() => search(changeSearchTerm, updateResults)} />
      <Results searchTerm={searchTerm} results={results} />
      <OptionsBar />
    </div>
  );
}

const search = async function (changeTermState, updateResults) {
  let term = await getSearchTerm();
  console.log("got search term: " + term);
  changeTermState(term);
  updateResults(await makeSearchOnApi(term));
};

const getSearchTerm = async function () {
  return "basketball";
};

const makeSearchOnApi = async function (searchTerm) {
  if (searchTerm !== "") {
    let responseData;
    await fetch(`https://www.reddit.com/search.json?q=${searchTerm}&limit=10`)
      .then((response) => response.json())
      .then((data) => (responseData = data));
    return responseData;
  }
};

export default Body;
