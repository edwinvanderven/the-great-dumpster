import axios from 'axios';
// import { call } from 'redux-saga/effects';
import { put, delay } from 'redux-saga/effects';

import { googleApiKey } from '../../api-keys';

import * as actions from '../actions/index';

// function* means a generator
// yield waits until it is done (sync or async)

export function* logoutSaga(action) {
  // to make it testable use the call function for easier mocking
  // yield call([localStorage, "removeItem"], "token");
  yield localStorage.removeItem('token');

  yield localStorage.removeItem('localId');
  yield localStorage.removeItem('expirationDate');
  yield put(actions.logoutSucceed());
}

export function* checkAuthTimeoutSaga(action) {
  yield delay(action.expirationTime * 1000);
  yield put(actions.logout());
}

export function* authUserSaga(action) {
  yield put(actions.authStart());
  const authData = {
    email: action.email,
    password: action.password,
    returnSecureToken: true
  }
  const apiKey = googleApiKey;
  const signUpurl = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + apiKey;
  const loginUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + apiKey;

  try {
    const response = yield axios.post(action.isSignup ? signUpurl : loginUrl, authData);
    const expirationDate = yield new Date(new Date().getTime() + (response.data.expiresIn * 1000));
    yield localStorage.setItem('token', response.data.idToken);
    yield localStorage.setItem('localId', response.data.localId);
    yield localStorage.setItem('expirationDate', expirationDate);
    yield put(actions.authSuccess(response.data.idToken, response.data.localId));
    yield put(actions.checkAuthTimeout(response.data.expiresIn));
  } catch(error) {
    yield put(actions.authFail(error.response.data.error));
  };
}

export function* authCheckStateSaga(action) {
  const token = yield localStorage.getItem('token');
  if (!token) {
    yield put(actions.logout());
    return;
  }

  const expirationDate = yield new Date(localStorage.getItem('expirationDate'));
  if (expirationDate <= new Date()) {
    yield put(actions.logout());
    return;
  }

  const localId = yield localStorage.getItem('localId');
  yield put(actions.authSuccess(token, localId));
  const leftOverSeconds = (expirationDate.getTime() - new Date().getTime()) / 1000;
  yield put(actions.checkAuthTimeout(leftOverSeconds));
}