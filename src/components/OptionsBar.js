import React from "react";
import "../styles/options.css";

function OptionsBar(props) {
  return (
    <div className="stylesbar">
      <div className="row">
        <div className="col-3"></div>
        <div className="col-3">
          <h5 className="options-text">Options</h5>
        </div>
      </div>
      <div className="row">
        <div className="col-3"></div>
        <div className="col-3">
          <button className="bg-secondary text-light optionbutton">More</button>
        </div>
        <div className="col-3">
          <button
            className="bg-info text-light optionbutton"
            onClick={props.search}
          >
            Another
          </button>
        </div>
      </div>
    </div>
  );
}

export default OptionsBar;
