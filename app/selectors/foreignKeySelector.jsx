class ForeignKeySelector {
  static getStore = state => (
    state.foreignKey
  );

  static getList = (state, foreignKeyId) => (
    ForeignKeySelector.getStore(state).foreignKeyList[foreignKeyId]
  );
}

export default ForeignKeySelector;
