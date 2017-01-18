import tableDefApi from 'api/tableDefApi';
import * as types from 'actionTypes';
import { getSessionId } from 'store/sessionSelector';

export function loadTableDefByIdSuccess(response) {
  return {
    type: types.TABLE_DEF_LOAD_SUCCESS,
    data: response,
  };
}

export function loadTableDefById(tableDefId) {
  return (dispatch, getState) => (
    tableDefApi.loadTableDefById(getSessionId(getState()), tableDefId).then((response) => {
      dispatch(loadTableDefByIdSuccess(response));
    }).catch((error) => {
      throw error;
    })
  );
}
