class SessionSelector {
  static getStore = state => (
    state.session
  );

  static getId = state => (
    SessionSelector.getStore(state).sessionId
  );

  static getLoginFailureField = state => (
    SessionSelector.getStore(state).loginFailure
  );
}

export default SessionSelector;
