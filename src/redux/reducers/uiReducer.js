/** @format */
import {
  UI_LOADING_LOGIN_BUTTON,
  UI_LOADING_REGISTER_BUTTON,
  UI_LOADING_LOGOUT_BUTTON,
  UI_LOADING_ARTWORK
} from "../actions/type";

const initialState = {
  ui_loading_login: false,
  isFetching_artwork: false
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

    case UI_LOADING_ARTWORK:
      return {
        ...state,
        isFetching_artwork: action.payload
      };
    default:
      return state;
  }
}
