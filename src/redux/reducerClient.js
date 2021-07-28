import { FETCH_TYPES } from "../actions/fetchActions";
const INITIAL_STATE = {
  user: null,
  currentToken: null,
  isLoading: false,
  errToken: null,
  errRegister: null,
  successRegister: null,
  dataDriver: null,
  statusValidation: 0,
  statusCheck: 0,
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    /**Peticion token */
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
    /**Peticion para el registro */
    case FETCH_TYPES.fetchRegister:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_TYPES.fetchRegisterSuccess:
      return {
        ...state,
        successRegister: action.payload,
      };
    case FETCH_TYPES.fetchRegisterFail:
      return {
        ...state,
        errRegister: action.payload,
      };
    /**Peticion para la validacion TELEFONICO */
    case FETCH_TYPES.fetchValidation:
      return {
        ...state,
        statusValidation: 0,
      };
    case FETCH_TYPES.fetchValidationSuccess:
      return {
        ...state,
        statusValidation: action.payload,
      };
    case FETCH_TYPES.fetchValidationFail:
      return {
        ...state,
        statusValidation: 0,
      };
    /**Peticion para la validacion del CODIGO */
    case FETCH_TYPES.fetchCheck:
      return {
        ...state,
        statusCheck: 0,
      };
    case FETCH_TYPES.fetchCheckSuccess:
      return {
        ...state,
        statusCheck: action.payload,
      };
    case FETCH_TYPES.fetchCheckFail:
      return {
        ...state,
        statusCheck: 0,
      };
    /**Peticion para traer datos del usuario */
    case FETCH_TYPES.fetchCreateDriver:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_TYPES.fetchCreateDriverSuccess:
      return {
        ...state,
        dataDriver: action.payload,
        isLoading: false,
      };
    case FETCH_TYPES.fetchCreateDriverFail:
      return {
        ...state,
        errRegister: action.payload,
      };

    /**Petcion para registro del conductor */
    case FETCH_TYPES.fetchPostDriver:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_TYPES.fetchPostDriverSuccess:
      return {
        ...state,
        isLoading: false,
      };
    case FETCH_TYPES.fetchPostDriverFail:
      return {
        ...state,
        errRegister: action.payload,
      };

    default:
      return state;
  }
};
