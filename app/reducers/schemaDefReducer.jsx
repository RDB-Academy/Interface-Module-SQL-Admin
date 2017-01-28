import * as types from 'actionTypes';

const initialState = {
  schemaDefList: [],
};

export default function schemaDefReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_SCHEMA_DEF_LIST_SUCCESS: {
      return Object.assign({}, state, {
        schemaDefList: action.data,
        error: null,
      });
    }

    case types.LOAD_SCHEMA_DEF_LIST_FAILURE: {
      return Object.assign({}, state, {
        error: {
          code: action.data.httpCode,
          text: action.data.httpText,
          body: action.data.body,
        },
      });
    }

    case types.LOAD_SCHEMA_DEF_SUCCESS: {
      const oldSchemaDef = state.schemaDefList.find(e => e.id === action.data.id);
      if (oldSchemaDef === -1) {
        return {
          ...state,
          schemaDefList: [
            ...state.schemaDefList,
            action.data.id,
          ],
        };
      }
      const newState = {
        ...state,
        schemaDefList: [
          ...state.schemaDefList.slice(0, oldSchemaDef),
          action.data,
          ...state.schemaDefList.slice(oldSchemaDef + 1),
        ],
      };
      return newState;
    }

    case types.INVALIDATE_STORE: {
      return initialState;
    }

    default:
      return state;
  }
}
