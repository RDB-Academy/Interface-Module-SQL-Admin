import { combineReducers } from 'redux';

import session from './sessionReducer';
import schemaDef from './schemaDefReducer';
import task from './taskReducer';

export default combineReducers({
  session,
  schemaDef,
  task,
});
