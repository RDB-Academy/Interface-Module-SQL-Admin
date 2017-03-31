import { combineReducers } from 'redux';

import session from './sessionReducer';
import schemaDef from './schemaDefReducer';
import tableDef from './tableDefReducer';
import columnDef from './columnDefReducer';
import task from './taskReducer';

export default combineReducers({
  session,
  schemaDef,
  tableDef,
  columnDef,
  task,
});
