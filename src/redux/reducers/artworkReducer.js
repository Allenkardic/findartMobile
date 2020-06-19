/** @format */

import {
  GET_ARTWORKS,
  GET_ARTWORK
  //   BID_ARTWORK,
  //   MY_ARTWORKS,
  //   BID_MESSAGE,
  //   CREATE_ARTWORK,
  //   CLEAR_ERROR
} from "../actions/type";

const initialState = {
  singleArtwork: {},
  artworks: []
  //   userArtworks: [],
  //   artworkbidMessage: [],
  //   createArtworkMessage: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ARTWORK:
      return {
        ...state,
        singleArtwork: action.payload
      };
    case GET_ARTWORKS:
      return {
        ...state,
        artworks: action.payload
      };
    default:
      return state;
  }
}
