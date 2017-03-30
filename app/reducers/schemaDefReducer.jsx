import { SchemaDefActionTypes as types } from 'actionTypes';

const initialState = {
  schemaDefList: [],
};

const schemaDefReducer = (state = initialState, action) => {
  switch (action.type) {
    /**
     * Create
     */
    case types.CREATE_SUCCESS:
    case types.UPDATE_SUCCESS:
    case types.READ_SUCCESS: {
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
  /**
   * Read All
   */
    case types.READ_ALL_SUCCESS: {
      return Object.assign({}, state, {
        schemaDefList: action.data,
        error: null,
      });
    }

    case types.READ_ALL_FAILURE: {
      return Object.assign({}, state, {
        error: {
          code: action.error.httpCode,
          text: action.error.httpText,
          body: action.error.body,
        },
      });
    }

    case types.DELETE_SUCCESS: {
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

    /**
     * Fallback
     */
    default:
      return state;
  }
};

export default schemaDefReducer;
