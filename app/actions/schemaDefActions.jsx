import schemaDefApi from 'api/schemaDefApi';
import * as types from 'actionTypes';
import { getSessionId } from 'store/sessionSelector';

export function loadSchemaDefListSuccess(response) {
  return {
    type: types.LOAD_SCHEMA_DEF_LIST_SUCCESS,
    data: response,
  };
}

export function loadSchemaDefListFailure(error) {
  return {
    type: types.LOAD_SCHEMA_DEF_LIST_FAILURE,
    data: {
      httpCode: error.message,
      httpText: error.httpText,
      body: error.body,
    },
  };
}

export function loadSchemaDefSuccess(response) {
  return {
    type: types.LOAD_SCHEMA_DEF_SUCCESS,
    data: response,
  };
}

export function loadSchemaDefFailure(error) {
  return {
    type: types.LOAD_SCHEMA_DEF_FAILURE,
    data: {
      httpCode: error.message,
      httpText: error.httpText,
      body: error.body,
    },
  };
}

export function loadSchemaDefList() {
  return (dispatch, getState) => (
    schemaDefApi.loadSchemaDefList(getSessionId(getState())).then((response) => {
      dispatch(loadSchemaDefListSuccess(response));
    }).catch((error) => {
      dispatch(loadSchemaDefListFailure(error));
    })
  );
}

export function loadSchemaDef(id) {
  return (dispatch, getState) => (
    schemaDefApi.loadSchemaDef(id, getSessionId(getState())).then((response) => {
      console.log(response);
      dispatch(loadSchemaDefSuccess(response));
    }, (error) => {
      dispatch(loadSchemaDefFailure(error));
    })
  );
}
