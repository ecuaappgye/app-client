import React from "react";
import { useForm } from "react-hook-form";
import { postRecover } from "../../services/fetchLogin";

const FormMail = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (value) => {
    postRecover(value).then((res) => {
      console.log(res.data);
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} method="post">
        <div class="mb-3">
          <label htmlFor="email" className="form-label">
            Correo:
          </label>
          <input
            id="email"
            type="email"
            className="form-control"
            placeholder=""
            aria-describedby="helpId"
            {...register("email", { required: true })}
          />
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormMail;
