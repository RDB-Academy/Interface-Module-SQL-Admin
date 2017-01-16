import schemaDefApi from 'api/schemaDefApi';
import * as types from 'actionTypes';
import { getSessionId } from 'store/sessionSelector';

export function loadSchemaDefListSuccess(response) {
  return {
    type: types.SCHEMA_DEF_LIST_SUCCESS,
    data: response,
  };
}

export function loadSchemaDefList() {
  return (dispatch, getState) => (
    schemaDefApi.loadSchemaDefList(getSessionId(getState())).then((response) => {
      dispatch(loadSchemaDefListSuccess(response));
    }).catch((error) => {
      throw error;
    })
  );
}
