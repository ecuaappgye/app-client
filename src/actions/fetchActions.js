import {
  getCreateDriver,
  postCreateDriver,
  postLogin,
  postRegister,
  postVerifyCheck,
  postVerifyPhone,
} from "../services/fetchLogin";

export const FETCH_TYPES = {
  fetchToken: "fetch_token",
  fetchTokenSuccess: "fetch_token_success",
  fetchTokenFail: "fetch_token_fail",
  fetchRegister: "fetch_register",
  fetchRegisterSuccess: "fetch_register_success",
  fetchRegisterFail: "fetch_register_fail",
  fetchValidation: "fetch_validation",
  fetchValidationSuccess: "fetch_validation_success",
  fetchValidationFail: "fetch_validation_fail",
  fetchCheck: "fetch_check",
  fetchCheckSuccess: "fetch_check_success",
  fetchCheckFail: "fetch_check_fail",
  fetchCreateDriver: "fetch_create_driver",
  fetchCreateDriverSuccess: "fetch_create_driver_success",
  fetchCreateDriverFail: "fetch_create_driver_fail",
  fetchPostDriver: "fetch_post_driver",
  fetchPostDriverSuccess: "fetch_post_driver_success",
  fetchPostDriverFail: "fetch_post_diver_fail",
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
      .catch((err) => dispatch(fetchRegisterFail(err.response.data.errors)));
};
/**Peticion para la validacion telefonica */
export const fetchValidation = () => ({
  type: FETCH_TYPES.fetchValidation,
});
/**En caso de peticion exitosa */
export const fetchValidationSuccess = (values) => ({
  type: FETCH_TYPES.fetchValidationSuccess,
  payload: values,
});
/**En caso de peticion fallida */
export const fetchValidationFail = (err) => ({
  type: FETCH_TYPES.fetchValidationFail,
  payload: err,
});
export const fetchValidationThunk = (user, values) => {
  return (dispatch) =>
    postVerifyPhone(user, values)
      .then((res) => dispatch(fetchValidationSuccess(res.status)))
      .catch(() => dispatch(fetchValidationFail()));
};

/**Peticion para check del CODIGO */
export const fetchCheck = () => ({
  type: FETCH_TYPES.fetchCheck,
});
/**En caso de peticion exitosa */
export const fetchCheckSuccess = (values) => ({
  type: FETCH_TYPES.fetchCheckSuccess,
  payload: values,
});
/**En caso de peticion fallida */
export const fetchCheckFail = (err) => ({
  type: FETCH_TYPES.fetchCheckFail,
  payload: err,
});
export const fetchCheckThunk = (user, values) => {
  return (dispatch) =>
    postVerifyCheck(user, values)
      .then((res) => dispatch(fetchCheckSuccess(res.status)))
      .catch(() => dispatch(fetchCheckFail()));
};
/**
 * Peticion para registro del conductor
 */
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
export const fetchCreateDriverThunk = (user, token) => {
  return (dispatch) =>
    getCreateDriver(user, token)
      .then((res) => dispatch(fetchCreateDriverSuccess(res.data)))
      .catch((err) => dispatch(fetchCreateDriverFail(err.response)));
};

export const fetchPostDriver = () => ({
  type: FETCH_TYPES.fetchPostDriver,
});
export const fetchPostDriverSuccess = () => ({
  type: FETCH_TYPES.fetchPostDriverSuccess,
});
export const fetchPostDriverFail = (err) => ({
  type: FETCH_TYPES.fetchPostDriverFail,
  payload: err,
});
export const fetchPostDriverThunk = (user, token, data) => {
  return (dispatch) =>
    postCreateDriver(user, token, data)
      .then(() => dispatch(fetchPostDriverSuccess()))
      .catch((err) => dispatch(fetchPostDriverFail(err.response)));
};
