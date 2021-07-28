import { faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useForm } from "react-hook-form";
import InputForm from "./InputForm";

const RegisterDocs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)} class="mb-3">
        <InputForm
          type={"file"}
          id={"photo"}
          label={"Foto frontal del conductor:"}
          register={register}
          errors={errors}
          validate={{ required: "Campo requerido." }}
        />

        <InputForm
          type={"file"}
          id={"licencia"}
          label={"Cédula - Lado A"}
          register={register}
          errors={errors}
          validate={{ required: "Campo requerido." }}
        />

        <button className="btn btn-outline-success">
          <FontAwesomeIcon icon={faSave} /> Guardar
        </button>
      </form>
    </div>
  );
};

export default RegisterDocs;
