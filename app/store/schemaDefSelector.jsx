export const getSchemaDefStore = state => (
  state.schemaDef
);

export const getSchemaDefList = state => (
  getSchemaDefStore(state).schemaDefList
);

export const getSchemaDefById = (state, id) => {
  const schemaDef = getSchemaDefList(state).filter(i => i.id === id);
  if (schemaDef.length === 0) {
    return null;
  }
  return schemaDef[0];
};
