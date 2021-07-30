import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const MapFormsItemTex = (iconF) => {
  return (
    <div className="d-flex mb-2">
      <div className="col-2">
        <FontAwesomeIcon size="2x" icon={iconF} className="text-center"/>
      </div>
      <div className="col-10 form-floating">
        <textarea
          className="form-control"
          id="floatingTextarea"
        />
        <label for="floatingTextarea">Comentario</label>
      </div>
    </div>
  );
};

export default MapFormsItemTex;
