import React from "react";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Input from "../utils/Input";
import { fetchRegisterThunk } from "../../actions/fetchActions";

const RegisterForm = () => {
  const [viewPass, setViewPass] = useState(true);
  const errRegister = useSelector((state) => state.errRegister) || [];
  const dispatch = useDispatch();
  /**Hook del formulario */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  /**Manejador del boton de password */
  const handlePass = () => {
    viewPass ? setViewPass(false) : setViewPass(true);
  };
  /**Lista de errores enviadas por el servidor */
  let listErrors = errRegister.map((element) => {
    return <p className="text-danger">** {element.message}</p>;
  });

  const onSubmit = (values) => {
    dispatch(fetchRegisterThunk(values));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h5 className="card-title">Registro de usuario</h5>
      <Input
        type={"text"}
        id={"first_name"}
        label={"Nombres:"}
        register={register}
        errors={errors}
        validate={{ required: "Campo requerido." }}
      />

      <Input
        type={"text"}
        id={"last_name"}
        label={"Apellidos:"}
        register={register}
        errors={errors}
        validate={{ required: "Campo requerido." }}
      />

      <Input
        type={"email"}
        id={"email"}
        label={"Correo:"}
        register={register}
        errors={errors}
        validate={{ required: "Campo requerido." }}
      />

      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Contraseña:
        </label>
        <div className="input-group">
          <input
            type={viewPass ? "password" : "text"}
            className="form-control"
            id="password"
            {...register("password", { required: true })}
          />
          <span
            role="button"
            className="input-group-text"
            id="basic-addon1"
            onClick={() => handlePass()}
          >
            {viewPass ? (
              <FontAwesomeIcon icon={faEye} />
            ) : (
              <FontAwesomeIcon icon={faEyeSlash} />
            )}
          </span>
        </div>
      </div>

      {/* {code ? (
        <div className="mb-3">
          <label htmlFor="code" className="form-label">
            Codigo:
          </label>
          <input
            type="text"
            className="form-control"
            id="code"
            {...register("code", { required: false })}
          />
        </div>
      ) : (
        <span
          role="button"
          className="badge rounded-pill bg-warning text-dark mb-3"
          onClick={() => handleCode()}
        >
          Tengo un codigo
        </span>
      )} */}

      <div className="">{listErrors}</div>
      <button className="btn btn-primary">Enviar</button>
    </form>
  );
};

export default RegisterForm;
