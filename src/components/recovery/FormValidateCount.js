import React from "react";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import { prefixPhone } from "../utils/prefixPhone";
import Input from "../utils/Input";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCheckThunk,
  fetchValidationThunk,
} from "../../actions/fetchActions";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const FormValidateCount = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.successRegister);
  const status = useSelector((state) => state.statusValidation);
  const check = useSelector((state) => state.statusCheck);
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  /**
   *Lista de prefijos telefonicos
   */
  const listPrefix = prefixPhone.map((element, index) => {
    return (
      <option
        key={index}
        value={element.dial_code}
      >{`${element.name} (${element.dial_code})`}</option>
    );
  });
  /**
   * Submit para el formulario telefonico
   */
  const onSubmit = (values) => {
    let phone = values.phone.split("");
    if (phone.length === 10) phone.shift();
    console.log({ phone: `${values.prefix}${phone.join("")}` });
    dispatch(
      fetchValidationThunk(user, {
        phone: `${values.prefix}${phone.join("")}`,
      })
    );
  };
  /**
   * Submit para enviar el codigo de verificacion
   */
  const onSubmitCode = (value) => {
    dispatch(fetchCheckThunk(user, value));
  };

  useEffect(() => {
    if (check) history.push("/");
  }, [check]);

  return status ? (
    <>
      <form onSubmit={handleSubmit(onSubmitCode)}>
        <h2 className="display-6 m-2 text-center">Validación telefónica</h2>
        <div className="container">
          <Input
            label={"Código de verificación"}
            type={"text"}
            register={register}
            id={"token"}
            validate={{
              required: "Campo requerido.",
              maxLength: {
                value: 6,
                message: "Este campo excede los 6 digitos permitidos.",
              },
              minLength: {
                value: 6,
                message: "Este campo requiere 6 digitos.",
              },
              pattern: {
                value: /^([0-9])*$/,
                message: "Este campo debe ser numérico.",
              },
            }}
            errors={errors}
          />
          <button className="btn btn-outline-success">
            <FontAwesomeIcon icon={faPaperPlane} /> Enviar
          </button>
        </div>
      </form>
    </>
  ) : (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="display-6 m-2 text-center">Validación telefónica</h2>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            País:
          </label>
          <select className="form-select" {...register("prefix")}>
            {listPrefix}
          </select>
        </div>
        <Input
          label={"Teléfono"}
          id={"phone"}
          register={register}
          errors={errors}
          type={"text"}
          validate={{
            required: "Campo requerido.",
            maxLength: {
              value: 10,
              message: "Este campo excede los 10 digitos permitidos.",
            },
            pattern: {
              value: /^([0-9])*$/,
              message: "Este campo debe ser numérico.",
            },
          }}
        />
        <button className="btn btn-outline-success">
          <FontAwesomeIcon icon={faPaperPlane} /> Enviar
        </button>
      </form>
    </>
  );
};

export default FormValidateCount;
