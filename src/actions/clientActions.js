export const ACTION_TYPES = {
  changeToken: "change_token",
};

export const changeToken = (token) => ({
  type: "change_token",
  payload: token
});