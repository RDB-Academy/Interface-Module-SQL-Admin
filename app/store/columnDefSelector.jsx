class ColumnDefSelector {
  static getStore = state => (
    state.columnDef
  );

  static getList = (state, tableDefId) => (
    ColumnDefSelector.getStore(state).columnDefList[tableDefId]
  );
}

export default ColumnDefSelector;
