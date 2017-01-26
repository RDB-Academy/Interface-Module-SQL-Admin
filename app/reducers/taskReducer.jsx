import * as types from 'actionTypes';

const initialState = {
  taskList: [],
};

export default function taskReducer(state = initialState, action) {
  switch (action.type) {
    case types.TASK_LIST_SUCCESS: {
      return Object.assign({}, state, {
        taskList: action.data,
      });
    }
    case types.INVALIDATE_STORE: {
      return initialState;
    }
    default:
      return state;
  }
}
