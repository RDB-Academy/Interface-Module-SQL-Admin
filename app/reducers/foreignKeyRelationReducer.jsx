import { ForeignKeyRelationActionTypes as types, ForeignKeyActionTypes } from 'actionTypes';

const initialState = {
  foreignKeyRelationList: [],
  byId: {},
};

export default function foreignKeyRelationReducer(state = initialState, action) {
  switch (action.type) {
    /**
     * Special Function
     */
    case ForeignKeyActionTypes.READ_SUCCESS: {
      const foreignKeyRelationList = Object.assign({}, state.foreignKeyRelationList);
      if (typeof foreignKeyRelationList[action.data.id] === 'undefined') {
        foreignKeyRelationList[action.data.id] = [
          ...action.data.foreignKeyRelationList,
        ];
      } else {
        console.log('ToDo foreignKeyRelationReducer columnDefList vorhanden');
      }
      return {
        ...state,
        foreignKeyRelationList,
      };
    }
    /**
     * Create
     */
    case types.CREATE_SUCCESS: {
      const foreignKeyRelationList = [
        ...state.foreignKeyRelationList[action.data.tableDefId],
        action.data,
      ];
      return {
        ...state,
        foreignKeyRelationList: {
          ...state.foreignKeyRelationList,
          [action.data.foreignKeyId]: foreignKeyRelationList,
        },
      };
    }
    /**
     * Read
     */
    case types.READ_SUCCESS: {
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.data.id]: action.data,
        },
      };
    }
    case types.INVALIDATE_STORE: {
      return initialState;
    }

    default:
      return state;
  }
}
