import Frame from "./Frame";
import Icon1 from "../../assets/icons/icon1_about.png";
import Icon2 from "../../assets/icons/icon2_about.png";
import Icon3 from "../../assets/icons/icon3_about.png";
import Icon4 from "../../assets/icons/icon4_about.png";
import Icon5 from "../../assets/icons/icon5_about.png";
import Icon6 from "../../assets/icons/icon6_about.png";

import React from "react";

const PrinciplesMoral = () => {
  return (
    <div>
      <section id="About" className="my-1">
        <div className="container">
          <div className="row mb-3 justify-content-center">
            <div className="col-lg-10">
              <div className="text-center pb-40">
                <div className="m-auto"></div>
                <h2>Nuestros Principios</h2>
              </div>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-sm-4 rounded">
              <div className="text-center mt-30 fadeIn">
                <div className="justifity-center">
                  <img src={Icon1} alt="Nos compremetemos" />
                </div>
                <Frame
                  name="Compromiso"
                  message="Contribuimos con rapides con la toma de decisiones."
                />
              </div>
            </div>
            <div className="col-sm-4 rounded">
              <div className="text-center mt-30 fadeIn">
                <div className="justifity-center">
                  <img src={Icon2} alt="" />
                </div>
                <Frame
                  name="Compromiso"
                  message="Contribuimos con rapides con la toma de decisiones."
                />
              </div>
            </div>
            <div className="col-sm-4 rounded">
              <div className="text-center mt-30 fadeIn">
                <div className="justifity-center">
                  <img src={Icon3} alt="" />
                </div>
                <Frame
                  name="Compromiso"
                  message="Contribuimos con rapides con la toma de decisiones."
                />
              </div>
            </div>
          </div>
          <div className="row col-sm mb-5">
            <div className="col-sm rounded">
              <div className="single-services text-center mt-30 fadeIn">
                <div className="justifity-center">
                  <img src={Icon4} alt="" />
                </div>
                <Frame
                  name="Compromiso"
                  message="Contribuimos con rapides con la toma de decisiones."
                />
              </div>
            </div>
            <div className="col-sm rounded">
              <div className="single-services text-center mt-30 fadeIn">
                <div className="justifity-center">
                  <img src={Icon5} alt="" />
                </div>
                <Frame
                  name="Compromiso"
                  message="Contribuimos con rapides con la toma de decisiones."
                />
              </div>
            </div>
            <div className="col-sm rounded">
              <div className="single-services text-center mt-30 fadeIn">
                <div className="justifity-center">
                  <img src={Icon6} alt="" />
                </div>
                <Frame
                  name="Compromiso"
                  message="Contribuimos con rapides con la toma de decisiones."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrinciplesMoral;
