import sessionApi from 'api/sessionApi';
import * as types from 'actionTypes';

function loginSuccess(response) {
  return {
    type: types.LOG_IN_SUCCESS,
    data: response,
  };
}

function logoutSuccess() {
  return {
    type: types.LOG_OUT_SUCCESS,
  };
}

export function loginUser(credentials) {
  return dispatch => (
    sessionApi.login(credentials).then((response) => {
      dispatch(loginSuccess(response));
    }).catch((error) => {
      throw error;
    })
  );
}

export function logoutUser() {
  return dispatch => (
    sessionApi.logout().then(() => {
      dispatch(logoutSuccess());
    }).catch((error) => {
      throw error;
    })
  );
}
