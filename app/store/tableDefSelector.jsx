export const getTableDefStore = state => (
  state.tableDef
);

export const getTableDefList = (state, schemaDefId) => (
  getTableDefStore(state).tableDefList[schemaDefId]
);
