import React from "react";
import { useForm } from "react-hook-form";
import Input from "../utils/Input";
const inputs = [
  {
    type: "text",
    name: "Nombre",
    id: "firstname",
    required: true,
  },
  {
    type: "text",
    name: "Apellido",
    id: "lastname",
    required: true,
  },
  {
    type: "text",
    name: "Direccion",
    id: "addres",
    required: true,
  },
  {
    type: "file",
    name: "Img",
    id: "form-file",
    required: true,
  },
];
const RegisterDriver = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (values) => {
    alert(JSON.stringify(values));
  };
  const listInput = inputs.map((element) => {
    return (
      <Input
        type={element.type}
        name={element.name}
        id={element.id}
        register={register}
        required={element.required}
        key={element.id}
      />
    );
  });

  return (
    <div>
      <h2>Registro de conductor</h2>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          {listInput}
          <button className="btn btn-outline-primary">Ingresar</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterDriver;
