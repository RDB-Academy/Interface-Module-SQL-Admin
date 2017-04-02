class SessionSelector {
  static getStore = state => (
    state.session
  );

  static getId = state => (
    SessionSelector.getStore(state).sessionId
  );
}

export default SessionSelector;
