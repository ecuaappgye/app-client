import { FETCH_TYPES } from "../actions/fetchActions";
const INITIAL_STATE = {
  user: null,
  currentToken: null,
  isLoading: false,
  errToken: null,
  errRegister: null,
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_TYPES.fetchToken:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_TYPES.fetchTokenSuccess:
      return {
        ...state,
        isLoading: false,
        user: action.payload.data,
        currentToken: action.payload.session,
      };
    case FETCH_TYPES.fetchTokenFail:
      return {
        ...state,
        errToken: action.payload,
      };
    case FETCH_TYPES.fetchRegister:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_TYPES.fetchRegisterSuccess:
      return {
        ...state,
        isLoading: false,
      };
    case FETCH_TYPES.fetchRegisterFail:
      return {
        ...state,
        errRegister: action.payload,
      };
    case FETCH_TYPES.fetchCreateDriver:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_TYPES.fetchCreateDriverSuccess:
      return {
        ...state,
        isLoading: false,
      };
    case FETCH_TYPES.fetchCreateDriverFail:
      return {
        ...state,
        errRegister: action.payload,
      };

    default:
      return state;
  }
};
