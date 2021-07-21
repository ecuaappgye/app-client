import Frame from "./Frame";
import { Icon1, Icon2, Icon3, Icon4, Icon5, Icon6 } from "../../assets/icons";
import React from "react";

const PrinciplesMoral = () => {
  return (
    <div>
      <section id="About" className="my-1">
        <div className="container-fluid">
          <div className="row mb-3 justify-content-center">
            <div className="col-lg-10">
              <div className="text-center pb-40">
                <div className="m-auto"></div>
                <h1>Nuestros Principios</h1>
              </div>
            </div>
          </div>

          <div className="row mb-2 justify-content-center ">
            <Frame
              img={Icon1}
              describe="Hola que tal"
              name="Compromiso"
              message="Contribuimos con rapides con la toma de decisiones."
            />
            <Frame
              img={Icon2}
              describe="Hola que tal"
              name="Compromiso"
              message="Contribuimos con rapides con la toma de decisiones."
            />
            <Frame
              img={Icon3}
              describe="Hola que tal"
              name="Compromiso"
              message="Contribuimos con rapides con la toma de decisiones."
            />
            <Frame
              img={Icon4}
              describe="Hola que tal"
              name="Compromiso"
              message="Contribuimos con rapides con la toma de decisiones."
            />
            <Frame
              img={Icon5}
              describe="Hola que tal"
              name="Compromiso"
              message="Contribuimos con rapides con la toma de decisiones."
            />
            <Frame
              img={Icon6}
              describe="Hola que tal"
              name="Compromiso"
              message="Contribuimos con rapides con la toma de decisiones."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrinciplesMoral;
