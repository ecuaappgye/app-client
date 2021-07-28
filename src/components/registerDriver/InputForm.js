import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const InputForm = ({ label, id, errors, type, register, validate }) => {
  return (
    <div className="mb-3 row">
      <label htmlFor={id} className="col-sm-2 col-form-label">
        {label}
      </label>
      <div className="col-sm-10">
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
    </div>
  );
};

export default InputForm;
