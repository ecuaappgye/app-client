import React from "react";

const Frame = (props) => {
  return (
    <div>
      <div className="mt-30">
        <h5>{props.name}</h5>
        <p className="text">{props.message}</p>
      </div>
    </div>
  );
};
export default Frame;
