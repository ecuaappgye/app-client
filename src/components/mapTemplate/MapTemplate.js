import { faFacebook, faUber } from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faCar,
  faCommentAlt,
  faInfo,
  faMapMarked,
  faMapMarkedAlt,
  faMapPin,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./MapTemplate.css";
import React, { useState } from "react";
import MapForms from "./MapForms";
import { MapPrueba } from "../../assets/img";

const MapTemplate = () => {
  const [desactiveButton, setdesactiveButton] = useState("TopTranslateR");
  const [desactiveForms, setdesactiveForms] = useState("");

  const descButton = () => {
    if (desactiveButton === "TopTranslateR") {
      return setdesactiveButton("TopTranslate");
    }
    return setdesactiveButton("TopTranslateR");
  };

  const descForms = () => {
    if (!desactiveForms) {
      return setdesactiveForms("MapFormMain");
    }
    return setdesactiveForms("");
  };

  return (
    <div
      className="container-fluid"
    >
      <div className="row" >
        <div className="col-12">
          <div className="d-flex">
            <div className="m-2">
              <button
                className="btn btn-success btn-circle btn-lg"
                onClick={() => descButton()}
              >
                <FontAwesomeIcon icon={faBars} />
              </button>
            </div>
            <div className={`d-flex ${desactiveButton}`}>
              <div className="m-2">
                <button
                  className="btn btn-primary btn-circle btn-lg"
                  onClick={() => descForms()}
                >
                  <FontAwesomeIcon icon={faUser} />
                </button>
              </div>
              <div className="m-2">
                <button className="btn btn-primary btn-circle btn-lg">
                  <FontAwesomeIcon icon={faCar} />
                </button>
              </div>
              <div className="m-2">
                <button className="btn btn-primary btn-circle btn-lg">
                  <FontAwesomeIcon icon={faFacebook} />
                </button>
              </div>
              <div className="m-2">
                <button className="btn btn-primary btn-circle btn-lg">
                  <FontAwesomeIcon icon={faUber} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <MapForms id={`${desactiveForms}`} />
      </div>
    </div>
  );
};

export default MapTemplate;
