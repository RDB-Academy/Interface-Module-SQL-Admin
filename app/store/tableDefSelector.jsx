export const getTableDefStore = state => (
  state.tableDef
);

export const getTableDefList = state => (
  getTableDefStore(state).tableDefList
);

export const getTableById = (state, id) => {
  const tableDef = getTableDefList(state).filter(i => i.id === id);
  if (tableDef.length === 0) {
    return null;
  }
  return tableDef[0];
};
