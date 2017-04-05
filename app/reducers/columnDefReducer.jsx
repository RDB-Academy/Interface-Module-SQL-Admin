import { ColumnDefActionTypes as types, TableDefActionTypes } from 'actionTypes';

const initialState = {
  columnDefList: [],
  byId: {},
};

export default function columnDefReducer(state = initialState, action) {
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
