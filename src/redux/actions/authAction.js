/** @format */
import axios from 'axios';
import { AsyncStorage } from 'react-native';

import {
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  SET_AUTH_LOGIN_ERROR,
  SET_AUTH_REGISTER_ERROR,
  UI_LOADING_LOGIN_BUTTON,
  UI_LOADING_REGISTER_BUTTON,
  UI_LOADING_LOGOUT_BUTTON,
  SHOW_AUTH_TOAST,
  SHOW_AUTH_TOAST_REGISTER
} from './type';

export const signinUser = (user, navigation) => (dispatch) => {
  dispatch({ type: UI_LOADING_LOGIN_BUTTON, payload: true });
  dispatch({ type: SHOW_AUTH_TOAST, payload: false });
  axios
    .post('https://findartt.herokuapp.com/api/v1/auth/login', user)
    .then((response) => {
      const userToken = response.data.data.tokenInfo.accessToken;
      AsyncStorage.setItem('token', userToken);
      axios.defaults.headers.common['Authorization'] = userToken;
      dispatch({ type: SET_AUTHENTICATED });
      dispatch({ type: UI_LOADING_LOGIN_BUTTON, payload: false });
      console.log(navigation);
      // navigation.navigate("artworks");
    })
    .catch((error) => {
      dispatch({ type: UI_LOADING_LOGIN_BUTTON, payload: false });
      dispatch({
        type: SET_AUTH_LOGIN_ERROR,
        payload: error.response.data.message
      });
      dispatch({ type: SHOW_AUTH_TOAST, payload: true });
    });
};

export const signupUser = (newUser, history) => (dispatch) => {
  dispatch({ type: UI_LOADING_REGISTER_BUTTON, payload: true });
  dispatch({ type: SHOW_AUTH_TOAST_REGISTER, payload: false });
  axios
    .post('https://findartt.herokuapp.com/api/v1/auth/signup', newUser)
    .then((response) => {
      const userToken = response.data.data.tokenInfo.accessToken;
      localStorage.setItem('token', userToken);
      axios.defaults.headers.common['Authorization'] = userToken;
      dispatch({ type: SET_AUTHENTICATED });
      dispatch({ type: UI_LOADING_REGISTER_BUTTON, payload: false });
    })
    .catch((error) => {
      dispatch({ type: UI_LOADING_REGISTER_BUTTON, payload: false });
      dispatch({
        type: SET_AUTH_REGISTER_ERROR,
        payload: error.response.data.message
      });
      dispatch({ type: SHOW_AUTH_TOAST_REGISTER, payload: true });
    });
};

export const logout = () => (dispatch) => {
  dispatch({ type: UI_LOADING_LOGOUT_BUTTON, payload: true });
  axios
    .post('https://findartt.herokuapp.com/api/v1/auth/logout')
    .then((response) => {
      delete axios.defaults.headers.common['Authorization'];
      AsyncStorage.removeItem('token');
      dispatch({
        type: SET_UNAUTHENTICATED
      });
      dispatch({ type: UI_LOADING_LOGOUT_BUTTON, payload: false });
    })
    .catch((error) => {
      dispatch({ type: UI_LOADING_LOGOUT_BUTTON, payload: false });
      console.log(error);
    });
};
