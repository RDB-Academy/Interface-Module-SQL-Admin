export const getSchemaDefStore = state => (
  state.schemaDef
);

export const getSchemaDefList = state => (
  getSchemaDefStore(state).schemaDefStore
);
