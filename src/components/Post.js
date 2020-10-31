import React from "react";

function Post(props) {
  return (
    <div className="col-4">
      <p>{props.title}</p>
      <p>{props.text}</p>
    </div>
  );
}

export default Post;
