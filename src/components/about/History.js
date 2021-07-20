import React from "react";
import About from "./About.css";
import MisionI from "../../assets/img/misionwuy.png";
import ImageDesem from "../../assets/img/ImagenDesem.png";

const History = () => {
  return (
    <div>
      <section id="Mission" className="">
        <div
          className="container-fluid"
        >
          <div className="row">
            <div className="col-lg 6 align-self-center p-3">
              <div className="">
                <img src={MisionI} className="img-fluid" alt="Nuestra Misión" />
              </div>
            </div>
            <div className="col-lg-6 align-content-center p-4">
              <div className=" frameDegra border-radius-p text-start text-dark  p-5">
                <h2>Historia</h2>
                <p className="fs-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem voluptatum nisi iste ducimus quasi voluptatibus
                  recusandae molestiae placeat. Accusantium, natus repellat
                  magni facilis vero accusamus dolores hic? Repudiandae, at
                  culpa.
                </p>
                <p className="fs-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus, unde officia? Itaque dolorem amet odio iste
                  consequatur saepe. Impedit inventore tempora quisquam eius
                  aspernatur ipsam molestias sit dolor atque! Blanditiis!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default History;
