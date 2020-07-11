/** @format */

import {
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  SET_AUTH_LOGIN_ERROR,
  SET_AUTH_REGISTER_ERROR,
  SHOW_AUTH_TOAST
} from '../actions/type';

const initialState = {
  authenticated: false,
  loginMessage: '',
  registerMessage: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true
      };

    case SET_AUTH_LOGIN_ERROR:
      return {
        ...state,
        loginMessage: action.payload
      };

    case SET_AUTH_REGISTER_ERROR:
      return {
        ...state,
        registerMessage: action.payload
      };

    case SET_UNAUTHENTICATED:
      return {
        ...state,
        authenticated: false
      };

    default:
      return state;
  }
}
