class SchemaDefSelector {
  static getStore = state => (
    state.schemaDef
  );

  static getList = state => (
    SchemaDefSelector.getStore(state).schemaDefList
  );

  static getById = (state, id) => {
    const schemaDef = SchemaDefSelector.getList(state).filter(i => i.id === id);
    if (schemaDef.length === 0) {
      return null;
    }
    return schemaDef[0];
  };

}

export default SchemaDefSelector;
