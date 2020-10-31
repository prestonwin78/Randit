import React from "react";
import Post from "./Post";
import "../styles/styles.css";
import "../styles/results.css";

function Results(props) {
  let posts = [];
  let searchText = "";
  if (props.searchMade) {
    searchText = 'Searching for: "' + props.searchTerm + '"';
    posts = getListOfPosts(props.results);
  }
  return (
    <div className="resultsbody">
      <div className="row">
        <h3 className="searchtext">{searchText}</h3>
      </div>
      <div className="row">{posts}</div>
    </div>
  );
}

function getListOfPosts(results) {
  let posts = [];

  for (let i = 0; i < results.data.children.length; i++) {
    posts.push(<Post title={results.data.children[i].data.title} />);
  }

  return posts;
}

export default Results;
