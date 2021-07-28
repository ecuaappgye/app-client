import axios from "axios";
export const baseUrl = `https://e93e77156e6f.ngrok.io`;

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

export const getCreateDriver = (user, token) =>
  axios.get(`${baseUrl}/api/auth/get/${user.id}/`, {
    headers: { Authorization: `Session ${token}` },
  });

export const postCreateDriver = (user, token, values) =>
  axios.post(`${baseUrl}/api/driver/update/${user.id}/`, values, {
    headers: {
      Authorization: `Session ${token}`,
    },
  });

export const postVerifyPhone = (user, values) =>
  axios.post(`${baseUrl}/api/auth/register/verify/${user.user_id}/`, values);

export const postVerifyCheck = (user, values) =>
  axios.post(
    `${baseUrl}/api/auth/register/verify_check/${user.user_id}/`,
    values
  );
