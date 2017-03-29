import tableDefApi from 'api/tableDefApi';
import * as types from 'actionTypes';
import { getSessionId } from 'store/sessionSelector';

export const loadTableDefByIdSuccess = response => ({
  type: types.TABLE_DEF_CREATE_SUCCESS,
  data: response,
});

export const createTableDefSuccess = response => ({
  type: types.TABLE_DEF_CREATE_SUCCESS,
  data: response,
});

export function loadTableDefById(tableDefId) {
  return (dispatch, getState) => (
    tableDefApi.loadTableDefById(getSessionId(getState()), tableDefId).then((response) => {
      dispatch(loadTableDefByIdSuccess(response));
    }).catch((error) => {
      throw error;
    })
  );
}

export function createTableDef(tableDef) {
  return (dispatch, getState) => (
    tableDefApi.createTableDef(getSessionId(getState()), tableDef).then((response) => {
      dispatch(createTableDefSuccess(response));
    }).catch((error) => {
      throw error;
    })
  );
}
