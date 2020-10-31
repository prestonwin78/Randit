import React from "react";
import Post from "./Post";
import "../styles/styles.css";
import "../styles/results.css";

function Results(props) {
  const posts = getListOfPosts(props.results);
  return (
    <div className="row resultsbody">
      <h3 className="searchtext">Searching for: {props.searchTerm}</h3>
      <p>Results from body: {JSON.stringify(props.results)}</p>
      {posts}
    </div>
  );
}

function getListOfPosts(results) {
  let posts = [];
  /*
  results.forEach((item) => {
    <Post title={} text={} />;
  });
  */
  return posts;
}

export default Results;
