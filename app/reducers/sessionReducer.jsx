import * as types from 'actionTypes';

const initialState = null;

export default function sessionReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOG_IN_SUCCESS:
      return Object.assign({}, action.data);
    default:
      return state;
  }
}
