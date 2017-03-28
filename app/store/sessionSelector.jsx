export const getSessionStore = state => (
  state.session
);

export const getSessionId = state => (
  getSessionStore(state).sessionId
);
