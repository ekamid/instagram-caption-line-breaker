import React from "react";

const ActionBtn = ({ covertAndCopy, clearCaption }) => {
  return (
    <div className="row">
      <div className="col">
        <button
          type="button"
          className="btn btn-primary"
          onClick={covertAndCopy}
        >
          Convert And Copy
        </button>
      </div>
      <div className="col-4">
        <button
          type="button"
          className="btn btn-danger  float-right"
          onClick={clearCaption}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default ActionBtn;
