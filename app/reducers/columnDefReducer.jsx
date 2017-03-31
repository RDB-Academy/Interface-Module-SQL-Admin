import { ColumnDefActionTypes as types, TableDefActionTypes } from 'actionTypes';

const initialState = {
  columnDefList: [],
};

export default function tableDefReducer(state = initialState, action) {
  switch (action.type) {
    /**
     * Special Function
     */
    case TableDefActionTypes.READ_SUCCESS: {
      const columnDefList = Object.assign({}, state.columnDefList);
      if (typeof columnDefList[action.data.id] === 'undefined') {
        columnDefList[action.data.id] = [
          ...action.data.columnDefList,
        ];
      } else {
        console.log('ToDo columnDefReducer columnDefList vorhanden');
      }
      return {
        ...state,
        columnDefList,
      };
    }
    /**
     * Create
     */
    case types.CREATE_SUCCESS: {
      const columnDefList = [
        ...state.columnDefList[action.data.tableDefId],
        action.data,
      ];
      return {
        ...state,
        columnDefList: {
          ...state.columnDefList,
          [action.data.tableDefId]: columnDefList,
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
