import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import imgRegister from "../../assets/img/imgRegister.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchRegisterThunk } from "../../actions/fetchActions";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const dispacth = useDispatch();
  const arrRegister = useSelector((state) => state.arrRegister);
  let arr = [];

  useEffect(() => {
    if (arrRegister) {
      arr = [...arrRegister.data.errors];
    }
  }, [arrRegister]);

  const onSubmit = (values) => {
    dispacth(fetchRegisterThunk(values));
  };
  let listErrors = arr.map((element) => {
    return <p className="text-danger">** {element.message}</p>;
  });
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <h5 className="card-title">Registro de usuario</h5>
              <div className="mb-3">
                <label htmlFor="first_name" className="form-label">
                  Nombres:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="first_name"
                  {...register("first_name", { required: true })}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="last_name" className="form-label">
                  Apellidos:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="last_name"
                  {...register("last_name", { required: true })}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Correos:
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  {...register("email", { required: true })}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Contraseña:
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  {...register("password", { required: true })}
                />
              </div>
              <div className="">
                {listErrors}
              </div>
              <button className="btn btn-primary">Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
