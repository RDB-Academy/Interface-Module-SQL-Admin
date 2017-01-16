import * as types from 'actionTypes';

const initialState = {
  schemaDefList: [],
};

export default function schemaDefReducer(state = initialState, action) {
  switch (action.type) {
    case types.SCHEMA_DEF_LIST_SUCCESS: {
      return Object.assign({}, state, {
        schemaDefList: action.data,
      });
    }
    default:
      return state;
  }
}