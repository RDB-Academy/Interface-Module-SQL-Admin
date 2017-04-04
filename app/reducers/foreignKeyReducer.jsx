import { ForeignKeyActionTypes as types, SchemaDefActionTypes } from 'actionTypes';

const initialState = {
  foreignKeyList: [],
};

export default function foreignKeyReducer(state = initialState, action) {
  switch (action.type) {
    /**
     * Special Function
     */
    case SchemaDefActionTypes.READ_SUCCESS: {
      const foreignKeyList = Object.assign({}, state.foreignKeyList);
      if (typeof foreignKeyList[action.data.id] === 'undefined') {
        foreignKeyList[action.data.id] = [
          ...action.data.relations.foreignKeyList,
        ];
      } else {
        console.log('ToDo tableDefReducer TableList vorhanden');
      }
      return {
        ...state,
        foreignKeyList,
      };
    }
    /**
     * Create
     */
    case types.CREATE_SUCCESS: {
      const foreignKeyList = [
        ...state.foreignKeyList[action.data.schemaDefId],
        action.data,
      ];
      return {
        ...state,
        foreignKeyList: {
          ...state.foreignKeyList,
          [action.data.schemaDefId]: foreignKeyList,
        },
      };
    }
    /**
     * Read
     */
    case types.READ_SUCCESS: {
      console.log(action);
      return state;
    }
    case types.INVALIDATE_STORE: {
      return initialState;
    }

    default:
      return state;
  }
}
