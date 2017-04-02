class TableDefSelector {
  static getStore = state => (
    state.tableDef
  );

  static getList = (state, schemaDefId) => (
    TableDefSelector.getStore(state).tableDefList[schemaDefId]
  );
}

export default TableDefSelector;
