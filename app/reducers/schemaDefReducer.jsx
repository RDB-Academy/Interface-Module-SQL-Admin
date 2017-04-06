import { SchemaDefActionTypes as types } from 'actionTypes';

const initialState = {
  byId: {},
  entities: [],
  error: null,
};

const schemaDefReducer = (state = initialState, action) => {
  switch (action.type) {
    /**
     * Create
     */
    case types.CREATE_SUCCESS:
    case types.UPDATE_SUCCESS:
    case types.READ_SUCCESS: {
      const entities = new Set(state.entities);
      const newState = {
        ...state,
      };

      newState.byId[action.data.id] = action.data;
      entities.add(action.data.id);

      newState.entities = Array.from(entities);
      newState.entities.sort((a, b) => a - b);
      return newState;
    }

    /**
     * Read a List of SchemaDef objects
     */
    case types.READ_LIST_SUCCESS: {
      const schemaDefList = action.data;
      const entities = new Set(state.entities);

      const newState = {
        ...state,
      };

      schemaDefList.sort((a, b) => (a.id > b.id));
      action.data.forEach((schemaDef) => {
        newState.byId[schemaDef.id] = schemaDef;
        entities.add(schemaDef.id);
      });

      newState.entities = Array.from(entities);
      newState.entities.sort((a, b) => a - b);
      return newState;
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
      const newState = {
        ...state,
        entities: state.entities.filter(a => (a !== action.data.id)),
      };

      delete newState.byId[action.data.id];

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
