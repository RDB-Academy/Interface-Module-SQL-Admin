class ForeignKeyRelationSelector {
  static getStore = state => (
    state.foreignKeyRelation
  );

  static getList = (state, foreignKeyId) => (
    ForeignKeyRelationSelector.getStore(state).foreignKeyRelationList[foreignKeyId]
  );

  static byId = (state, id) => (
    ForeignKeyRelationSelector.getStore(state).byId[id]
  );
}

export default ForeignKeyRelationSelector;
