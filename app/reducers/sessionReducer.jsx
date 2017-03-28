import * as types from 'actionTypes';

const initialState = {
  sessionId: localStorage.getItem('auth-key') || null,
  loginFailure: false,
};

export default function sessionReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOG_IN_SUCCESS:
      return {
        ...state,
        sessionId: action.data.id,
      };
    case types.LOG_IN_FAILURE:
      return {
        ...state,
        loginFailure: true,
      }
    case types.LOG_OUT_SUCCESS:
      return {
        ...initialState,
        sessionId: null,
      };
    default:
      return state;
  }
}
