import React from "react";
import About from "./About.css";

const More = () => {
  return (
    <div>
      <section id="More" className="my-5">
        <div className="container-md">
          <div>
              <h1 className="text-center">Somos los mejores</h1>
          </div>
          <div className="row text-center">
            <div className="col-12 col-sm-6 col-md-6 col-lg-4 p-3 ">
              <p className="display-4">Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-4 p-3 ">
              <p className="display-4">Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-4 p-3 ">
              <p className="display-4">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default More;
