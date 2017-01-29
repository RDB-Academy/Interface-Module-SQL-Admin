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

export const deleteSchemaDefSuccess = id => ({
  type: types.DELETE_SCHEMA_DEF_SUCCESS,
  data: {
    id,
  },
});

export const deleteSchemaDefFailure = error => ({
  type: types.DELETE_SCHEMA_DEF_FAILURE,
  data: {
    httpCode: error.message,
    httpText: error.httpText,
    body: error.body,
  },
});

export function createSchemaDef(schemaDef) {
  return (dispatch, getState) => (
    schemaDefApi.createSchemaDef(schemaDef, getSessionId(getState())).then((response) => {
      dispatch(loadSchemaDefSuccess(response));
    }, (error) => {
      dispatch(loadSchemaDefFailure(error));
    })
  );
}

export const loadSchemaDefList = () => (
  (dispatch, getState) => (
    schemaDefApi
      .loadSchemaDefList(getSessionId(getState()))
        .then(response => (
          dispatch(loadSchemaDefListSuccess(response))
        )).catch(error => (
          dispatch(loadSchemaDefListFailure(error))
        ))
  )
);

export const loadSchemaDef = id => (
  (dispatch, getState) => (
    schemaDefApi
      .loadSchemaDef(id, getSessionId(getState()))
      .then((response) => {
        dispatch(loadSchemaDefSuccess(response));
      }, (error) => {
        dispatch(loadSchemaDefFailure(error));
      })
  )
);

export const updateSchemaDef = (id, schemaDef) => (
  (dispatch, getState) => (
    schemaDefApi
      .updateSchemaDef(id, getSessionId(getState()), schemaDef)
        .then(response => (
          dispatch(loadSchemaDefSuccess(response))
        ), error => (
          dispatch(loadSchemaDefFailure(error))
        ))
  )
);

export function deleteSchemaDef(id) {
  return (dispatch, getState) => (
    schemaDefApi.deleteSchemaDef(id, getSessionId(getState())).then(() => {
      dispatch(deleteSchemaDefSuccess(id));
    }, (error) => {
      dispatch(deleteSchemaDefFailure(error));
    })
  );
}
