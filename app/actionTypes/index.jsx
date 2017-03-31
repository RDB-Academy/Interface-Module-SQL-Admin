export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';

export const TASK_LIST_SUCCESS = 'TASK_LIST_SUCCESS';

export class BaseActionTypes {
  static INVALIDATE_STORE = 'INVALIDATE_STORE';
}

/**
 * SchemaDef Actions
 */
export class SchemaDefActionTypes extends BaseActionTypes {
  // Create
  static CREATE_SUCCESS = 'SCHEMA_DEF_CREATE_SUCCESS';
  static CREATE_FAILURE = 'SCHEMA_DEF_CREATE_FAILURE';
  // Read
  static READ_SUCCESS = 'SCHEMA_DEF_READ_SUCCESS';
  static READ_FAILURE = 'SCHEMA_DEF_READ_FAILURE';
  // ReadAll
  static READ_ALL_SUCCESS = 'SCHEMA_DEF_READ_ALL_SUCCESS';
  static READ_ALL_FAILURE = 'SCHEMA_DEF_READ_ALL_FAILURE';
  // Update
  static UPDATE_SUCCESS = 'SCHEMA_DEF_UPDATE_SUCCESS';
  static UPDATE_FAILURE = 'SCHEMA_DEF_UPDATE_FAILURE';
  // Delete
  static DELETE_SUCCESS = 'SCHEMA_DEF_DELETE_SUCCESS';
  static DELETE_FAILURE = 'SCHEMA_DEF_DELETE_FAILURE';
}

/**
 * TableDef Actions
 */
export class TableDefActionTypes extends BaseActionTypes {
  // Create
  static CREATE_SUCCESS = 'TABLE_DEF_CREATE_SUCCESS';
  static CREATE_FAILURE = 'TABLE_DEF_CREATE_FAILURE';
  // Read
  static READ_SUCCESS = 'TABLE_DEF_READ_SUCCESS';
  static READ_FAILURE = 'TABLE_DEF_READ_FAILURE';
}

/**
 * TableDef Actions
 */
export class ColumnDefActionTypes extends BaseActionTypes {
  // Create
  static CREATE_SUCCESS = 'COLUMN_DEF_CREATE_SUCCESS';
  static CREATE_FAILURE = 'COLUMN_DEF_CREATE_FAILURE';
  // Read
  static READ_SUCCESS = 'COLUMN_DEF_READ_SUCCESS';
  static READ_FAILURE = 'COLUMN_DEF_READ_FAILURE';
}
