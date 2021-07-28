import React from "react";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Input = ({ type, label, id, register, errors, validate }) => {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        type={type}
        className="form-control"
        id={id}
        {...register(`${id}`, validate )}
      />
      {errors[`${id}`] && (
        <p className="text-danger">
          <FontAwesomeIcon icon={faExclamationCircle} />{" "}
          {errors[`${id}`].message}
        </p>
      )}
    </div>
  );
};

export default Input;
