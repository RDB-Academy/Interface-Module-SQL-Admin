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
      console.log(response);
      dispatch(loginSuccess(response));
    }).catch((error) => {
      console.log('loginUser');
      console.log(error);
      dispatch(loginFailure());
    })
  );
}

export function logoutUser() {
  return dispatch => (
    sessionApi.logout().then(() => {
      dispatch(logoutSuccess());
      dispatch(invalidateStore());
    }).catch((error) => {
      throw error;
    })
  );
}
