import { faCommentAlt, faDollarSign, faMapMarked, faMapPin, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import MapFormsItem from "./MapFormsItem";
import MapFormsItemTex from "./MapFormsItemTex";

const MapForms = ({id}) => {
  return (
    <div className="col-md-4" id={id}>
      <div className="card bg-light p-3">
        <div className="card-body">
          <form>
            <MapFormsItem iconF={faMapPin} typeF={"text"} description={"¿Donde te encuentras?"}/>
            <MapFormsItem iconF={faMapMarked} typeF={"text"} description={"¿Donde te diriges?"}/>
            <MapFormsItem iconF={faDollarSign} typeF={"text"} description={"Precio"}/>
            <MapFormsItemTex iconF={faCommentAlt} description={"Observaciones"}/>

            <div className="d-flex justify-content-center">
              <button type="button" class="btn btn-success">
                SOLICITAR SERVICIO
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MapForms;
