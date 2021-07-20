import React from "react";

const Input = ({ type, name, id, register, required }) => {
  return (
    <div>
      <div className="mb-3">
        <label htmlFor={id} className="form-label">
          {name}
        </label>
        <input
          type={type}
          className="form-control"
          id={id}
          {...register(id, { required: required })}
        />
      </div>
    </div>
  );
};

export default Input;
