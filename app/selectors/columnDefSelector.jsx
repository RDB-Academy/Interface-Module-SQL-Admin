class ColumnDefSelector {
  static getStore = state => (
    state.columnDef
  );

  static getList = (state, tableDefId) => (
    ColumnDefSelector.getStore(state).columnDefList[tableDefId]
  );

  static byId = (state, id) => (
    ColumnDefSelector.getStore(state).byId[id]
  )
}

export default ColumnDefSelector;
