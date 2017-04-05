import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import session from './sessionReducer';

import schemaDef from './schemaDefReducer';
import tableDef from './tableDefReducer';
import columnDef from './columnDefReducer';
import foreignKey from './foreignKeyReducer';
import foreignKeyRelation from './foreignKeyRelationReducer';

import task from './taskReducer';

export default combineReducers({
  session,
  schemaDef,
  tableDef,
  columnDef,
  foreignKey,
  foreignKeyRelation,
  task,
  router: routerReducer,
});
