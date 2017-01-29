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
      const oldIndex = state.schemaDefList.findIndex(e => e.id === action.data.id);
      if (oldIndex === -1) {
        return {
          ...state,
          schemaDefList: [
            ...state.schemaDefList,
            action.data,
          ],
        };
      }
      const newState = {
        ...state,
        schemaDefList: [
          ...state.schemaDefList.slice(0, oldIndex),
          action.data,
          ...state.schemaDefList.slice(oldIndex + 1),
        ],
      };
      return newState;
    }

    case types.DELETE_SCHEMA_DEF_SUCCESS: {
      const oldIndex = state.schemaDefList.findIndex(e => e.id === action.data.id);
      if (oldIndex === -1) {
        return {
          ...state,
          schemaDefList: [
            ...state.schemaDefList,
          ],
        };
      }
      const newState = {
        ...state,
        schemaDefList: [
          ...state.schemaDefList.slice(0, oldIndex),
          ...state.schemaDefList.slice(oldIndex + 1),
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
