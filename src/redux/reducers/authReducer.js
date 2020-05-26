/** @format */

import {
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  SET_AUTH_LOGIN_ERROR,
  SET_AUTH_REGISTER_ERROR
} from "../actions/type";

const initialState = {
  authenticated: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true
      };

    default:
      return state;
  }
}
