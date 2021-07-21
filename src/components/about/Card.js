import React from "react";
import About from "./About.css";

const Card = ({orderPosicion1,orderPosicion2,image,imageDescrip,title,pagra1,pagra2}) => {
  return (
      <div>
          <div className="container-fluid">
          <div className="row">
            <div className={orderPosicion1}>
              <div className="">
                <img
                  src={image}
                  className="img-fluid"
                  alt={imageDescrip}
                />
              </div>
            </div>
            <div className={orderPosicion2}>
              <div className=" frameDegra border-radius-p text-start text-dark  p-5">
                <h2>{title}</h2>
                <p className="fs-6">{pagra1}
                </p>
                <p className="fs-6">{pagra2}
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
  );
};
export default Card;