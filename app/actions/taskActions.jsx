import taskApi from 'api/taskApi';
import * as types from 'actionTypes';
import { getSessionId } from 'store/sessionSelector';

export function loadTaskListSuccess(response) {
  return {
    type: types.TASK_LIST_SUCCESS,
    data: response,
  };
}

export function loadTaskList() {
  return (dispatch, getState) => (
    taskApi.loadTaskList(getSessionId(getState())).then((response) => {
      console.log(response);
      dispatch(loadTaskListSuccess(response));
    }).catch((error) => {
      throw error;
    })
  );
}
