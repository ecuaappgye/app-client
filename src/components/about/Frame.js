import React from "react";

const Frame2 = ({ img, describe, name, message }) => {
  return (
      <div className="col-lg-4 col-md-4 col-sm-6 col-12">
        <div className="text-center mt-30">
          <div>
            <img src={img} alt={describe} />
          </div>
          <div className="m-4">
            <h5>{name}</h5>
            <p className="text">{message}</p>
          </div>
        </div>
      </div>
  );
};
export default Frame2;
