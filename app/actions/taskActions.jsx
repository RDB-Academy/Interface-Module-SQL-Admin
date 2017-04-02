import taskApi from 'api/taskApi';
import * as types from 'actionTypes';
import { SessionSelector } from 'selectors';

export function loadTaskListSuccess(response) {
  return {
    type: types.TASK_LIST_SUCCESS,
    data: response,
  };
}

export function loadTaskList() {
  return (dispatch, getState) => (
    taskApi
      .loadTaskList(SessionSelector.getId(getState()))
      .then((response) => {
        dispatch(loadTaskListSuccess(response));
      }).catch((error) => {
        throw error;
      })
  );
}
