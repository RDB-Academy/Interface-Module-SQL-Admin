import * as types from 'actionTypes';

const initialState = {
  id: localStorage.getItem("auth-key") || null,
};

export default function sessionReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOG_IN_SUCCESS:
      return {
        ...state,
        id: action.data.id,
      }
    case types.LOG_OUT_SUCCESS:
      return initialState;
    default:
      return state;
  }
}
