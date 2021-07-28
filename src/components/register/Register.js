import React from "react";
import imgRegister from "../../assets/img/imgRegister.png";
import { useSelector } from "react-redux";
import RegisterForm from "./RegisterForm";
import FormValidateCount from "../recovery/FormValidateCount";

const Register = () => {
  const successRegister = useSelector((state) => state.successRegister) || null;

  return (
    <div
      className="row p-4 vh-100"
      style={{
        backgroundImage: `url(${imgRegister})`,
        backgroundSize: "cover",
      }}
    >
      <div className="col-md-8 d-flex flex-column justify-content-center text-light">
        <p className="display-1 w-md-75 w-75">Empiece a ganar dinero con Way</p>
        <p className="mt-3">
          Regístrese hoy y empiece a elegir las mejores solicitudes de viaje
          mañana mismo.
        </p>
      </div>
      <div className="col-md-4">
        <div className="card p-3">
          <div className="card-body">
            {successRegister ? (
              <FormValidateCount />
            ) : (
              <RegisterForm />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
