/** @format */
import axios from "axios";
import { AsyncStorage } from "react-native";

import {
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  SET_AUTH_LOGIN_ERROR,
  SET_AUTH_REGISTER_ERROR,
  UI_LOADING_LOGIN_BUTTON,
  UI_LOADING_REGISTER_BUTTON,
  UI_LOADING_LOGOUT_BUTTON
} from "./type";

export const signinUser = (user, navigation) => (dispatch) => {
  dispatch({ type: UI_LOADING_LOGIN_BUTTON, payload: true });
  axios
    .post("https://findartt.herokuapp.com/api/v1/auth/login", user)
    .then((response) => {
      const userToken = response.data.data.tokenInfo.accessToken;
      AsyncStorage.setItem("token", userToken);
      axios.defaults.headers.common.Authorization = userToken;
      dispatch({ type: SET_AUTHENTICATED });
      dispatch({ type: UI_LOADING_LOGIN_BUTTON, payload: false });
      navigation.push("artworks");
    })
    .catch((error) => {
      dispatch({ type: UI_LOADING_LOGIN_BUTTON, payload: false });
      console.log(error.response.data.message);
      dispatch({
        type: SET_AUTH_LOGIN_ERROR,
        payload: error.response.data.message
      });
    });
};

// export const signinUser = (user, navigation) => (dispatch) => {
//   dispatch({ type: UI_LOADING_LOGIN_BUTTON, payload: true });
//   return async (dispatch) => {
//     try {
//       const response = await axios.post(
//         "https://findartt.herokuapp.com/api/v1/auth/login",
//         user
//       );
//       const userToken = response.data.data.tokenInfo.accessToken;
//       AsyncStorage.setItem("token", userToken);
//       axios.defaults.headers.common.Authorization = userToken;
//       dispatch({ type: SET_AUTHENTICATED });
//       dispatch({ type: UI_LOADING, payload: false });
//       navigation.push("artworks");
//     } catch (error) {
//       dispatch({ type: UI_LOADING_LOGIN_BUTTON, payload: false });
//       console.log(error.response.data.message);
//       dispatch({
//         type: SET_AUTH_LOGIN_ERROR,
//         payload: error.response.data.message
//       });
//     }
//   };
// };

// export const signupUser = (newUser, history) => (dispatch) => {
//   dispatch({ type: UI_LOADING, payload: true });
//   axios
//     .post("https://findartt.herokuapp.com/api/v1/auth/signup", newUser)
//     .then((response) => {
//       const userToken = response.data.data.tokenInfo.accessToken;
//       localStorage.setItem("token", userToken);
//       axios.defaults.headers.common.Authorization = userToken;
//       dispatch({ type: SET_AUTHENTICATED });
//       dispatch({ type: CLEAR_ERROR });
//       dispatch({ type: UI_LOADING, payload: false });
//       history.push("/artworks");
//     })
//     .catch((error) => {
//       dispatch({ type: UI_LOADING, payload: false });
//       dispatch({
//         type: SET_ERROR_SIGNUP,
//         payload: error.response.data.message
//       });
//       notification.error({
//         message: "Invalid details",
//         description: error.response.data.message,
//         placement: "topRight",
//         duration: 10,
//         rtl: true
//       });
//       console.log(error.response.data.message);
//     });
// };

// export const logout = () => (dispatch) => {
//   dispatch({ type: UI_LOADING_NAV, payload: true });
//   axios
//     .post("https://findartt.herokuapp.com/api/v1/auth/logout")
//     .then((response) => {
//       delete axios.defaults.headers.common["Authorization"];
//       localStorage.removeItem("token");
//       dispatch({
//         type: SET_UNAUTHENTICATED
//       });
//       dispatch({ type: CLEAR_ERROR });
//       dispatch({ type: UI_LOADING_NAV, payload: false });
//       // history.push('/');
//     })
//     .catch((error) => {
//       dispatch({ type: UI_LOADING_NAV, payload: false });
//       notification.error({
//         message: "Error",
//         description: error.response.data.message,
//         placement: "topRight",
//         duration: 10,
//         rtl: true
//       });
//       console.log(error);
//     });
// };
