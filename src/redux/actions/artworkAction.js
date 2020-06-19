/** @format */

import axios from "axios";
import {
  GET_ARTWORK,
  UI_LOADING_ARTWORK,
  GET_ARTWORKS,
  UI_LOADING_ARTWORKS
} from "../actions/type";

export const getArtworks = () => (dispatch) => {
  dispatch({ type: UI_LOADING_ARTWORKS, payload: true });
  axios
    .get("https://findartt.herokuapp.com/api/v1/art/find")
    .then((response) => {
      dispatch({ type: GET_ARTWORKS, payload: response.data.data });
      dispatch({ type: UI_LOADING_ARTWORKS, payload: false });
      console.log(response.data.data);
    })
    .catch((error) => {
      dispatch({ type: UI_LOADING_ARTWORKS, payload: false });
      console.log(error);
    });
};

export const getArtwork = (id) => (dispatch) => {
  dispatch({ type: UI_LOADING_ARTWORK, payload: true });
  // getUserData();
  axios
    .get(`https://findartt.herokuapp.com/api/v1/art/find/${id}/summary`)
    .then((response) => {
      dispatch({ type: GET_ARTWORK, payload: response.data.data });
      dispatch({ type: UI_LOADING_ARTWORK, payload: false });
      console.log(response.data.data);
    })
    .catch((error) => {
      dispatch({ type: UI_LOADING_ARTWORK, payload: false });
      console.log(error);
    });
};
