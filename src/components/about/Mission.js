import React from "react";
import About from "./About.css";
import MisionI from "../../assets/img/misionwuy.png";
import ImageDesem from "../../assets/img/ImagenDesem.png";
const Mission = () => {
  return (
    <div>
      <section id="Mission" className="" >
        <div
          className="container-fluid bg-mission"
        >
          <div className="row">
            <div className="col-lg-6 align-content-center p-4">
              <div className="text-center text-dark frameDegra  p-5">
                <h2>Nuestra Misión</h2>
                <p className="fs-7">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem voluptatum nisi iste ducimus quasi voluptatibus
                  recusandae molestiae placeat. Accusantium, natus repellat
                  magni facilis vero accusamus dolores hic? Repudiandae, at
                  culpa.
                </p>
                <p className="fs-7">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus, unde officia? Itaque dolorem amet odio iste
                  consequatur saepe. Impedit inventore tempora quisquam eius
                  aspernatur ipsam molestias sit dolor atque! Blanditiis!
                </p>
              </div>
            </div>
            <div className="col-lg 6 align-self-center p-3">
              <div className="">
                <img src={MisionI} className="img-fluid" alt="Nuestra Misión" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Mission;
