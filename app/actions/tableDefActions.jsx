import tableDefApi from 'api/tableDefApi';
import { TableDefActionTypes as ActionTypes } from 'actionTypes';
import { getSessionId } from 'store/sessionSelector';

class TableDefActions {
  static createSuccess = data => ({
    type: ActionTypes.CREATE_SUCCESS,
    data,
  });

  static readSuccess = data => ({
    type: ActionTypes.CREATE_SUCCESS,
    data,
  });
}

class TableDefActionCreators {
  static createTableDef = tableDef => (
    (dispatch, getState) => (
      tableDefApi.createTableDef(getSessionId(getState()), tableDef).then((response) => {
        dispatch(TableDefActions.createSuccess(response));
      }).catch((error) => {
        throw error;
      })
    )
  );

  static loadTableDefById = tableDefId => (
    (dispatch, getState) => (
      tableDefApi.loadTableDefById(getSessionId(getState()), tableDefId).then((response) => {
        dispatch(TableDefActions.readSuccess(response));
      }).catch((error) => {
        throw error;
      })
    )
  );
}

export default TableDefActionCreators;
