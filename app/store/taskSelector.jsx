export const getTaskStore = state => (
  state.task
);

export const getTaskList = state => (
  getTaskStore(state).taskList
);
