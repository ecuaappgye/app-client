import React, { useEffect } from "react";
import { faExclamationCircle, faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCreateDriverThunk,
  fetchPostDriverThunk,
} from "../../actions/fetchActions";

const RegisterDriver = () => {
  const dispatch = useDispatch();
  const { user, currentToken, dataDriver } = useSelector((state) => state);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  useEffect(() => {
    if (currentToken && user) {
      dispatch(fetchCreateDriverThunk(user, currentToken));
    }
  }, [dispatch, currentToken, user]);

  const onSubmit = (data) => {
    dispatch(fetchPostDriverThunk(user, currentToken, data));
  };

  return (
    <div className="container">
      <h2 className="display-4 m-2 text-center">Registro de conductor</h2>
      <div className="container mt-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3 row">
            <label htmlFor="first_name" className="col-sm-2 col-form-label">
              Nombres:
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                defaultValue={dataDriver ? dataDriver.first_name : null}
                id="first_name"
                {...register("first_name", {
                  required: "Campo requerido.",
                  maxLength: {
                    value: 20,
                    message: `Este campo excede los 20 caracteres permitidos.`,
                  },
                })}
              />
              {errors.first_name &&
                (console.log(errors),
                (
                  <p className="text-danger">
                    <FontAwesomeIcon icon={faExclamationCircle} />{" "}
                    {errors.first_name.message}
                  </p>
                ))}
            </div>
          </div>

          <div className="mb-3 row">
            <label htmlFor="last_name" className="col-sm-2 col-form-label">
              Apellidos:
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                defaultValue={dataDriver ? dataDriver.last_name : null}
                id="last_name"
                {...register("last_name", {
                  required: "Campo requerido.",
                  maxLength: {
                    value: 20,
                    message: `Este campo excede los 20 caracteres permitidos`,
                  },
                })}
              />
              {errors.last_name &&
                (console.log(errors),
                (
                  <p className="text-danger">
                    <FontAwesomeIcon icon={faExclamationCircle} />{" "}
                    {errors.last_name.message}
                  </p>
                ))}
            </div>
          </div>

          <div className="mb-3 row">
            <label htmlFor="cdi" className="col-sm-2 col-form-label">
              Cédula:
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                defaultValue={dataDriver ? dataDriver.cdi : null}
                id="cdi"
                {...register("cdi", {
                  required: "Campo requerido.",
                  maxLength: {
                    value: 10,
                    message: `Este campo excede los 10 carácteres permitidos`,
                  },
                  pattern: {
                    value: /\d+/,
                    message: "Este campo debe ser numérico.",
                  },
                })}
              />
              {errors.cdi && (
                <p className="text-danger">
                  <FontAwesomeIcon icon={faExclamationCircle} />{" "}
                  {errors.cdi.message}
                </p>
              )}
            </div>
          </div>

          <div className="mb-3 row">
            <label htmlFor="address" className="col-sm-2 col-form-label">
              Dirección:
            </label>
            <div className="col-sm-10">
              <textarea
                type="text"
                className="form-control"
                defaultValue={dataDriver ? dataDriver.address : null}
                id="address"
                {...register("address", {
                  required: "Campo requerido.",
                  maxLength: {
                    value: 100,
                    message: `Este campo excede los 100 carácteres permitidos`,
                  },
                })}
              />
              {errors.address && (
                <p className="text-danger">
                  <FontAwesomeIcon icon={faExclamationCircle} />{" "}
                  {errors.address.message}
                </p>
              )}
            </div>
          </div>

          <div className="mb-3 row">
            <label htmlFor="email" className="col-sm-2 col-form-label">
              Correo:
            </label>
            <div className="col-sm-10">
              <input
                type="email"
                className="form-control"
                defaultValue={dataDriver ? dataDriver.email : null}
                id="email"
                readOnly
                {...register("email")}
              />
              {errors.email && (
                <p className="text-danger">
                  <FontAwesomeIcon icon={faExclamationCircle} />{" "}
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div className="mb-3 row">
            <label htmlFor="phone" className="col-sm-2 col-form-label">
              Teléfono:
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                defaultValue={dataDriver ? dataDriver.phone : null}
                id="phone"
                {...register("phone", {
                  required: "Campo requerido.",
                  maxLength: {
                    value: 10,
                    message: `Este campo excede los 10 carácteres permitidos`,
                  },
                  pattern: {
                    value: /\d+/,
                    message: "Este campo debe ser numérico.",
                  },
                })}
              />
              {errors.phone && (
                <p className="text-danger">
                  <FontAwesomeIcon icon={faExclamationCircle} />{" "}
                  {errors.phone.message}
                </p>
              )}
            </div>
          </div>
          
          <button className="btn btn-outline-primary">
            <FontAwesomeIcon icon={faSave} /> Guardar
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterDriver;
