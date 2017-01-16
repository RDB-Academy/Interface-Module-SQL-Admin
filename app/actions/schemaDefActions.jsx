import schemaDefApi from 'api/schemaDefApi';
import * as types from 'actionTypes';

export function loadSchemaDefListSuccess(response) {
  return {
    type: types.SCHEMA_DEF_LIST_SUCCESS,
    data: response,
  };
}

export function loadSchemaDefList() {
  return dispatch => (
    schemaDefApi.loadSchemaDefList().then((response) => {
      console.log(response);
      dispatch(loadSchemaDefListSuccess(response));
    }).catch((error) => {
      throw error;
    })
  );
}
