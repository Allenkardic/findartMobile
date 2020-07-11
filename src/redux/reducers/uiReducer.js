/** @format */
import {
  UI_LOADING_LOGIN_BUTTON,
  UI_LOADING_REGISTER_BUTTON,
  UI_LOADING_LOGOUT_BUTTON,
  UI_LOADING_ARTWORK,
  SHOW_AUTH_TOAST,
  SHOW_AUTH_TOAST_REGISTER
} from '../actions/type';

const initialState = {
  ui_loading_login: false,
  ui_loading_register: false,
  isFetching_artwork: false,
  authToast: false,
  authToast_register: false
  //   isFetching_artworks: false,
  //   isFetching_artworkBid_button: false,
  //   isFetching_userprofile: false,
  //   isFetching_userprofile_button: false,
  //   isFetching_myartworks: false,
  //   isFetching_myartworks_details: false,
  //   isFetching_myartwork_delete: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case UI_LOADING_LOGIN_BUTTON:
      return {
        ...state,
        ui_loading_login: action.payload
      };

    case UI_LOADING_REGISTER_BUTTON:
      return {
        ...state,
        ui_loading_register: action.payload
      };

    case UI_LOADING_ARTWORK:
      return {
        ...state,
        isFetching_artwork: action.payload
      };

    case SHOW_AUTH_TOAST:
      return {
        ...state,
        authToast: action.payload
      };
    case SHOW_AUTH_TOAST_REGISTER:
      return {
        ...state,
        authToast_register: action.payload
      };
    default:
      return state;
  }
}
