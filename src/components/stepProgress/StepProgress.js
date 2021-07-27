import React from "react";
import StepProgreso from "./StepProgress.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const StepProgress = () => {
  return (
    <div className="container-fluid">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-10  p-5">
            <div className="position-relative m-4">
              <div className="progress" style={{ height: "3px" }}>
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "100%" }}
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <button
                type="button"
                className="position-absolute top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill"
                style={{ width: "3rem", height: "3rem" }}
              >
                1
              </button>
              <button
                type="button"
                className="position-absolute top-0 start-50 translate-middle btn btn-sm btn-primary rounded-pill"
                style={{ width: "3rem", height: "3rem" }}
              >
                2
              </button>
              <button
                type="button"
                className="position-absolute top-0 start-100 translate-middle btn btn-sm btn-primary rounded-pill"
                style={{ width: "3rem", height: "3rem" }}
              >
                3
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepProgress;
