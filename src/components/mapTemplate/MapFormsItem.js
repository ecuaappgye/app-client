import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const MapFormsItem = ({iconF, typeF, description}) => {
  return (
    <div className="d-flex mb-2">
      <div className="col-2">
        <FontAwesomeIcon size="2x" icon={iconF} className="text-center" />
      </div>
      <div className="col-10">
        <input className="form-control" type={typeF} placeholder={description} />
      </div>
    </div>
  );
};

export default MapFormsItem;
