import axios from 'axios';

import { googleApiKey } from '../../api-keys';
import * as actionTypes from './actionTypes';


export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = (token, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken: token,
    userId: userId,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAILED,
    error: error
  };
};

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('localId');
  localStorage.removeItem('expirationDate');
  return {
    type: actionTypes.AUTH_LOGOUT
  };
};

export const checkAuthTimeout = (expirationTime) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  }
};

export const auth = (email, password, isSignup) => {
  return dispatch => {
    dispatch(authStart());

    const authData = {
      email: email,
      password: password,
      returnSecureToken: true
    };
    const apiKey = googleApiKey;
    const signUpurl = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + apiKey;
    const loginUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + apiKey;
    
    axios.post(isSignup ? signUpurl : loginUrl, authData)
      .then(response => {
        console.log(response);
        const expirationDate = new Date(new Date().getTime() + (response.data.expiresIn * 1000));
        localStorage.setItem('token', response.data.idToken);
        localStorage.setItem('localId', response.data.localId);
        localStorage.setItem('expirationDate', expirationDate);
        dispatch(authSuccess(response.data.idToken, response.data.localId));
        dispatch(checkAuthTimeout(response.data.expiresIn));
      })
      .catch(error => {
        console.log(error.response);
        dispatch(authFail(error.response.data.error));
      })
  }
};

export const setAuthRedirectPath = (path) => {
  return {
    type: actionTypes.SET_AUTH_REDIRECT_PATH,
    path: path
  };
};

export const authCheckState = () => {
  return dispatch => {
    const token = localStorage.getItem('token');
    if (!token) {
      dispatch(logout());
    } else {
      const expirationDate = new Date(localStorage.getItem('expirationDate'));
      if (expirationDate <= new Date()) {
        dispatch(logout());
      } else {
        const localId = localStorage.getItem('localId');
        dispatch(authSuccess(token, localId));
        const leftOverSeconds = (expirationDate.getTime() - new Date().getTime()) / 1000;
        dispatch(checkAuthTimeout(leftOverSeconds));
      }
    }
  };
};