/** @format */

import {
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  SET_AUTH_LOGIN_ERROR,
  SET_AUTH_REGISTER_ERROR
} from '../actions/type';

const initialState = {
  authenticated: false,
  loginMessage: ''
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
    case SET_UNAUTHENTICATED:
      return {
        ...state,
        authenticated: false
      };

    default:
      return state;
  }
}
