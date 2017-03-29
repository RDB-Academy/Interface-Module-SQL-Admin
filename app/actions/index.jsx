import { BaseActionTypes } from 'actionTypes';

const invalidateStore = () => ({
  type: BaseActionTypes.INVALIDATE_STORE,
});

export { default as SchemaDefActions } from './schemaDefActions';
export { default as TableDefActions } from './tableDefActions';
export default invalidateStore;
