import schemaDefApi from 'api/schemaDefApi';
import { SchemaDefActionTypes as types } from 'actionTypes';
import { getSessionId } from 'store/sessionSelector';


class SchemaDefActions {
/**
 * Create
 */
  static createSuccess = data => ({
    type: types.CREATE_SUCCESS,
    data,
  })

  static createFailure = error => ({
    type: types.CREATE_FAILURE,
    error,
  });

/**
 * Read
 */
  static readAllSuccess = data => ({
    type: types.READ_ALL_SUCCESS,
    data,
  });

  static readAllFailure = error => ({
    type: types.READ_ALL_FAILURE,
    error: {
      httpCode: error.message,
      httpText: error.httpText,
      body: error.body,
    },
  });

  static readSuccess = data => ({
    type: types.READ_SUCCESS,
    data,
  });

  static readFailure = error => ({
    type: types.READ_FAILURE,
    error: {
      httpCode: error.message,
      httpText: error.httpText,
      body: error.body,
    },
  });

/**
 * Update
 */
  static updateSuccess = data => ({
    type: types.UPDATE_SUCCESS,
    data,
  });

  static updateFailure = error => ({
    type: types.UPDATE_FAILURE,
    error,
  })

/**
 *  Delete
 */
  static deleteSuccess = data => ({
    type: types.DELETE_SUCCESS,
    data,
  });

  static deleteFailure = error => ({
    type: types.DELETE_FAILURE,
    error: {
      httpCode: error.message,
      httpText: error.httpText,
      body: error.body,
    },
  });
}

class SchemaDefActionCreator {
/**
 *  Create
 */
  static create = schemaDef => (
    (dispatch, getState) => (
      schemaDefApi.createSchemaDef(schemaDef, getSessionId(getState())).then((response) => {
        dispatch(SchemaDefActions.createSuccess(response));
      }, (error) => {
        dispatch(SchemaDefActions.createFailure(error));
      })
    )
  )
/**
 * Read
 */
  static readAll = () => (
    (dispatch, getState) => (
      schemaDefApi
        .loadSchemaDefList(getSessionId(getState()))
          .then(response => (
            dispatch(SchemaDefActions.readAllSuccess(response))
          )).catch(error => (
            dispatch(SchemaDefActions.readAllFailure(error))
          ))
    )
  );

  static read = id => (
    (dispatch, getState) => (
      schemaDefApi
        .loadSchemaDef(id, getSessionId(getState()))
        .then((response) => {
          dispatch(SchemaDefActions.readSuccess(response));
        }, (error) => {
          dispatch(SchemaDefActions.readFailure(error));
        })
    )
  );

/**
 * Update
 */
  static update = (id, schemaDef) => (
    (dispatch, getState) => (
      schemaDefApi
        .updateSchemaDef(id, getSessionId(getState()), schemaDef)
          .then(response => (
            dispatch(SchemaDefActions.updateSuccess(response))
          ), error => (
            dispatch(SchemaDefActions.updateFailure(error))
          ))
    )
  );

/**
 * Delete
 */
  static delete = id => (
    (dispatch, getState) => (
      schemaDefApi.deleteSchemaDef(id, getSessionId(getState())).then(() => {
        dispatch(SchemaDefActions.deleteSuccess({ id }));
      }, (error) => {
        dispatch(SchemaDefActions.deleteFailure(error));
      })
    )
  )
}

export default SchemaDefActionCreator;
