import React from "react";
import "../styles/header.css";

function Header() {
  return (
    <div>
      <div className="row">
        <div className="col-6 title-box">
          <h1 className="title">Randit</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <h6 className="subtext">A search tool for Reddit.</h6>
        </div>
      </div>
    </div>
  );
}

export default Header;
