import { BaseActionTypes } from 'actionTypes';

const invalidateStore = () => ({
  type: BaseActionTypes.INVALIDATE_STORE,
});

export { default as SchemaDefActions } from './schemaDefActions';
export { default as TableDefActions } from './tableDefActions';
export { default as ColumnDefActions } from './columnDefActions';
export { default as ForeignKeyActions } from './foreignKeyActions';
export default invalidateStore;
