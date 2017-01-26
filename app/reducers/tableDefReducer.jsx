import * as types from 'actionTypes';

const initialState = {
  tableDefList: [],
};

export default function tableDefReducer(state = initialState, action) {
  switch (action.type) {
    case types.TABLE_DEF_LOAD_SUCCESS: {
      return Object.assign({}, state, {
        tableDefList: [
          ...state.tableDefList,
          action.data,
        ],
      });
    }
    case types.INVALIDATE_STORE: {
      return initialState;
    }
    default:
      return state;
  }
}
