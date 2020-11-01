import React from "react";

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
        <p>{props.text}</p>
        <img src={props.thumbnail} alt="" className="thumbnail"></img>
        <p>{props.date}</p>
        <p>Score: {props.score}</p>
      </div>
    </div>
  );
}

export default Post;
