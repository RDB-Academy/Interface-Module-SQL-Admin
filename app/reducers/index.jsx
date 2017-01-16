import { combineReducers } from 'redux';

import session from './sessionReducer';
import schemaDef from './schemaDefReducer';

export default combineReducers({
  session,
  schemaDef,
});
