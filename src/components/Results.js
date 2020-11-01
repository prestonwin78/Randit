import React from "react";
import Post from "./Post";
import "../styles/styles.css";
import "../styles/results.css";

function Results(props) {
  let posts = [];
  let searchText = "";
  if (props.searchMade) {
    searchText = props.searchTerm;
    posts = getListOfPosts(props.results);
  }
  return (
    <div className="resultscontainer">
      <div className="resultsbody">
        <div className="row">
          <h4 className="searchtext">
            <span className="searchmsg">Searching for: </span>
            {searchText}
          </h4>
        </div>
        <div className="row">{posts}</div>
      </div>
    </div>
  );
}

function getListOfPosts(results) {
  let posts = [];
  for (let i = 0; i < results.data.children.length; i++) {
    const postApiData = results.data.children[i].data;
    posts.push(
      <Post
        title={postApiData.title}
        score={postApiData.ups}
        text={postApiData.selftext}
        thumbnail={postApiData.thumbnail}
        date="12/02/2020"
        link={postApiData.permalink}
      />
    );
  }
  return posts;
}

export default Results;
