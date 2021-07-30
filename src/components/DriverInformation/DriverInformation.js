import React from "react";

const DriverInformation = () => {
  return (
    <div className="container-fluid">
      <div className="row bg-ligth" style={{ height: "400px" }}>
        <div className="col-12 col-md-6 col-lg-6 d-flex align-self-center p-4">
          <div>
            <h2 className="display-3 text-center pt-2">
              Quieres ser conductor
            </h2>
            <p className="text-center pt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus, unde officia? Itaque dolorem amet odio iste
              consequatur saepe. Impedit inventore tempora quisquam eius
              aspernatur ipsam molestias sit dolor atque! Blanditiis!
            </p>
            <div className="text-center">
              <a href="#" className="btn btn-primary">
                Ser Conductor
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-6 d-flex align-self-center p-4">
            <div><p className="display-2 text-center">Imagen</p></div>
        </div>
      </div>
    </div>
  );
};

export default DriverInformation;
