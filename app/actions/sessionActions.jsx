import invalidateStore from 'actions';
import * as types from 'actionTypes';
import sessionApi from 'api/sessionApi';

function loginSuccess(response) {
  return {
    type: types.LOG_IN_SUCCESS,
    data: response,
  };
}

function loginFailure() {
  return {
    type: types.LOG_IN_FAILURE,
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
      localStorage.setItem('auth-key', response.id);
      dispatch(loginSuccess(response));
    }).catch(() => {
      dispatch(loginFailure());
    })
  );
}

export function logoutUser() {
  return dispatch => (
    sessionApi.logout().then(() => {
      localStorage.removeItem('auth-key');
      dispatch(logoutSuccess());
      dispatch(invalidateStore());
    }).catch(() => {
      localStorage.removeItem('auth-key');
      dispatch(logoutSuccess());
      dispatch(invalidateStore());
    })
  );
}
