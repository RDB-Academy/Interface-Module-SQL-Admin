import { ForeignKeyAPI } from 'api';
import { ForeignKeyActionTypes as ActionTypes } from 'actionTypes';
import { SessionSelector } from 'selectors';

class TableDefActions {
  static createSuccess = data => ({
    type: ActionTypes.CREATE_SUCCESS,
    data,
  });

  static readSuccess = data => ({
    type: ActionTypes.READ_SUCCESS,
    data,
  });
}

class TableDefActionCreators {
  static create = tableDef => (
    (dispatch, getState) => (
      ForeignKeyAPI
        .create(SessionSelector.getId(getState()), tableDef)
        .then((response) => {
          dispatch(TableDefActions.createSuccess(response));
        }).catch((error) => {
          throw error;
        })
    )
  );

  static read = tableDefId => (
    (dispatch, getState) => (
      ForeignKeyAPI
        .read(SessionSelector.getId(getState()), tableDefId)
        .then((response) => {
          dispatch(TableDefActions.readSuccess(response));
        }).catch((error) => {
          throw error;
        })
    )
  );
}

export default TableDefActionCreators;
