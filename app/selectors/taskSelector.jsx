export const getTaskStore = state => (
  state.task
);

export const getTaskList = state => (
  getTaskStore(state).taskList
);

export const getTaskById = (state, id) => {
  const task = getTaskList(state).filter(i => i.id === id);
  if (task.length === 0) {
    return null;
  }
  return task[0];
};
