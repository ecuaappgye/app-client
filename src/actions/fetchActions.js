import { postLogin, postRegister } from "../services/fetchLogin";

export const FETCH_TYPES = {
  fetchToken: "fetch_token",
  fetchTokenSuccess: "fetch_token_success",
  fetchTokenFail: "fetch_token_fail",
  fetchRegister: "fetch_register",
  fetchRegisterSuccess: "fetch_register_success",
  fetchRegisterFail: "fetch_register_fail",
  fetchCreateDriver: "fetch_create_driver",
  fetchCreateDriverSuccess: "fetch_create_driver_success",
  fetchCreateDriverFail: "fetch_create_driver_fail",
};

/**Petcion para el token */
export const fetchToken = () => ({
  type: FETCH_TYPES.fetchToken,
});
/**En caso de peticion exitasa */
export const fetchTokenSuccess = (token) => ({
  type: FETCH_TYPES.fetchTokenSuccess,
  payload: token,
});
/**En caso de peticion fallida */
export const fetchTokenFail = (err) => ({
  type: FETCH_TYPES.fetchTokenFail,
  payload: err,
});
/**Peticion para el token dispara el dispacth */
export const fetchTokenThunk = (values) => {
  return (dispatch) =>
    postLogin(values)
      .then((res) => dispatch(fetchTokenSuccess(res.data)))
      .catch((err) => dispatch(fetchTokenFail(err.response)));
};

/**Peticion para el registro */
export const fetchRegister = () => ({
  type: FETCH_TYPES.fetchRegister,
});
/**En caso de peticion exitosa */
export const fetchRegisterSuccess = (values) => ({
  type: FETCH_TYPES.fetchRegisterSuccess,
  payload: values,
});
/**En caso de peticion fallida */
export const fetchRegisterFail = (err) => ({
  type: FETCH_TYPES.fetchRegisterFail,
  payload: err,
});
export const fetchRegisterThunk = (values) => {
  return (dispatch) =>
    postRegister(values)
      .then((res) => dispatch(fetchRegisterSuccess(res.data)))
      .catch((err) => dispatch(fetchRegisterFail(err.response)));
};


export const fetchCreateDriver = () => ({
  type: FETCH_TYPES.fetchCreateDriver,
});
/**En caso de peticion exitosa */
export const fetchCreateDriverSuccess = (values) => ({
  type: FETCH_TYPES.fetchCreateDriverSuccess,
  payload: values,
});
/**En caso de peticion fallida */
export const fetchCreateDriverFail = (err) => ({
  type: FETCH_TYPES.fetchCreateDriverFail,
  payload: err,
});
export const fetchCreateDriverThunk = (values) => {
  return (dispatch) =>
    postRegister(values)
      .then((res) => dispatch(fetchCreateDriverSuccess(res.data)))
      .catch((err) => dispatch(fetchCreateDriverFail(err.response)));
};
