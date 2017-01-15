import sessionApi from 'api/sessionApi';
import * as types from 'actionTypes';

export function loginSuccess(response) {
  return {
    type: types.LOG_IN_SUCCESS,
    data: response,
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
