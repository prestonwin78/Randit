import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Results from "./Results";
import OptionsBar from "./OptionsBar";

function Body() {
  const [searchMade, changeSearchMade] = useState(false);
  const [searchTerm, changeSearchTerm] = useState("");
  const [results, updateResults] = useState({});
  return (
    <div className="body">
      <SearchBar
        search={() => search(changeSearchMade, changeSearchTerm, updateResults)}
      />
      <Results
        searchMade={searchMade}
        searchTerm={searchTerm}
        results={results}
      />
      <OptionsBar />
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
  return "basketball";
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
