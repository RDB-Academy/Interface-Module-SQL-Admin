class TableDefSelector {
  static getStore = state => (
    state.tableDef
  );

  static getList = (state, schemaDefId) => (
    TableDefSelector.getStore(state).tableDefList[schemaDefId]
  );

  static byId = (state, id) => (
    TableDefSelector.getStore(state).byId[id]
  )
}

export default TableDefSelector;
