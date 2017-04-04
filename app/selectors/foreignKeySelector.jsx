class ForeignKeySelector {
  static getStore = state => (
    state.foreignKey
  );

  static getList = (state, schemaDefId) => (
    ForeignKeySelector.getStore(state).foreignKeyList[schemaDefId]
  );
}

export default ForeignKeySelector;
