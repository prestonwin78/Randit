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
    let date = new Date();
    // converts Date of posts to milliseconds from seconds
    date.setTime(postApiData.created * 1000);
    const dateString =
      date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
    posts.push(
      <Post
        title={postApiData.title}
        score={postApiData.ups}
        text={postApiData.selftext}
        thumbnail={postApiData.thumbnail}
        date={dateString}
        link={postApiData.permalink}
        key={i}
      />
    );
  }
  return posts;
}

export default Results;
