import { ColumnDefAPI } from 'api';
import { ColumnDefActionTypes as ActionTypes } from 'actionTypes';
import { SessionSelector } from 'selectors';

class ColumnDefActions {
  static createSuccess = data => ({
    type: ActionTypes.CREATE_SUCCESS,
    data,
  });

  static readSuccess = data => ({
    type: ActionTypes.READ_SUCCESS,
    data,
  });
}

class ColumnDefActionCreators {
  static create = columnDef => (
    (dispatch, getState) => (
      ColumnDefAPI
        .create(SessionSelector.getId(getState()), columnDef)
        .then((response) => {
          dispatch(ColumnDefActions.createSuccess(response));
        }).catch((error) => {
          throw error;
        })
    )
  );

  static read = columnDefId => (
    (dispatch, getState) => (
      ColumnDefAPI
        .read(SessionSelector.getId(getState()), columnDefId)
        .then((response) => {
          dispatch(ColumnDefActions.readSuccess(response));
        }).catch((error) => {
          throw error;
        })
    )
  );
}

export default ColumnDefActionCreators;
