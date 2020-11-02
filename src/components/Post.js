import React from "react";
import "../styles/posts.css";

function Post(props) {
  return (
    <div className="col-4">
      <div className="card">
        <a
          href={`https://reddit.com${props.link}`}
          className="post-title text-dark"
        >
          {props.title}
        </a>
        <p className="subreddit">{props.subreddit}</p>
        <img src={props.thumbnail} alt="" className="thumbnail"></img>
        <div className="details">
          <div className="date-container">
            <p className="date">{props.date}</p>
          </div>
          <div className="score-container">
            <p className="score">
              Score: <span className="scoreNum">{props.score}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
