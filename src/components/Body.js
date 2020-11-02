import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Results from "./Results";
import OptionsBar from "./OptionsBar";
import randomWords from "random-words";

function Body() {
  const [searchMade, changeSearchMade] = useState(false);
  const [searchTerm, changeSearchTerm] = useState("");
  const [results, updateResults] = useState({});
  return (
    <div className="body">
      {!searchMade && (
        <SearchBar
          search={() =>
            search(changeSearchMade, changeSearchTerm, updateResults)
          }
        />
      )}
      {searchMade && (
        <Results
          searchMade={searchMade}
          searchTerm={searchTerm}
          results={results}
        />
      )}
      {searchMade && (
        <OptionsBar
          search={() =>
            search(changeSearchMade, changeSearchTerm, updateResults)
          }
        />
      )}
    </div>
  );
}

const search = async function (
  changeSearchMade,
  changeTermState,
  updateResults
) {
  let term = await getSearchTerm();
  changeTermState(term);
  await updateResults(await makeSearchOnApi(term));
  changeSearchMade(true);
};

const getSearchTerm = async function () {
  return randomWords(); // get a random word from package
};

const makeSearchOnApi = async function (searchTerm) {
  if (searchTerm !== "") {
    let responseData;
    await fetch(`https://www.reddit.com/search.json?q=${searchTerm}&limit=6`)
      .then((response) => response.json())
      .then((data) => (responseData = data));
    return responseData;
  }
};

export default Body;
