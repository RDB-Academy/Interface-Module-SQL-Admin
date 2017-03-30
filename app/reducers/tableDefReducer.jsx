import { TableDefActionTypes as types, SchemaDefActionTypes } from 'actionTypes';

const initialState = {
  tableDefList: [],
};

export default function tableDefReducer(state = initialState, action) {
  switch (action.type) {
    /**
     * Special Funciton
     */
    case SchemaDefActionTypes.READ_SUCCESS: {
      const tableDefList = Object.assign({}, state.tableDefList);
      if (typeof tableDefList[action.data.id] === 'undefined') {
        tableDefList[action.data.id] = [
          ...action.data.relations.tableDefList,
        ];
      } else {
        console.log('ToDo tableDefReducer TableList vorhanden');
      }
      return {
        ...state,
        tableDefList,
      };
    }
    case types.CREATE_SUCCESS: {
      const tableDefList = [
        ...state.tableDefList[action.data.schemaDefId],
        action.data,
      ];
      return {
        ...state,
        tableDefList: {
          ...state.tableDefList,
          [action.data.schemaDefId]: tableDefList,
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
