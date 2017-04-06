class SchemaDefSelector {
  static getStore = state => (
    state.schemaDef
  );

  static getList = state => (
    SchemaDefSelector.getStore(state).entities
  );

  static getById = (state, schemaDefId) => (
    SchemaDefSelector.getStore(state).byId[schemaDefId]
  );

}

export default SchemaDefSelector;
