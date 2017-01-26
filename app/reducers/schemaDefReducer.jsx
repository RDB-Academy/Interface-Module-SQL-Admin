import * as types from 'actionTypes';

const initialState = {
  schemaDefList: [],
};

export default function schemaDefReducer(state = initialState, action) {
  switch (action.type) {
    case types.SCHEMA_DEF_LIST_SUCCESS: {
      return Object.assign({}, state, {
        schemaDefList: action.data,
        error: null,
      });
    }
    case types.SCHEMA_DEF_LIST_FAILURE: {
      return Object.assign({}, state, {
        error: {
          code: action.data.httpCode,
          text: action.data.httpText,
          body: action.data.body,
        },
      });
    }
    case types.INVALIDATE_STORE: {
      return initialState;
    }
    default:
      return state;
  }
}
