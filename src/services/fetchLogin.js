import axios from "axios";
//axios.get(api , { headers: {"Authorization" : `Bearer ${token}`} })
const baseUrl = `https://4781de0e0e06.ngrok.io`;

/**Peticion para loguear al usuario */
export const postLogin = (values) =>
  axios({
    method: "POST",
    url: `${baseUrl}/api/auth/login/`,
    data: values,
  });

export const postRecover = (value) =>
  axios({
    method: "POST",
    url: `${baseUrl}/api/auth/password_reset/`,
    data: value,
  });

export const postRegister = (values) =>
  axios({
    method: "POST",
    url: `${baseUrl}/api/auth/register/`,
    data: values,
  });
