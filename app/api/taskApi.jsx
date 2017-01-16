import fetch from 'isomorphic-fetch';

class TaskApi {
  static loadTaskList(sessionId) {
    return fetch('/api/task', {
      headers: {
        'auth-key': sessionId,
      },
    }).then((response) => {
      return response.json();
    }).catch(error => (
      error
    ));
  }
}

export default TaskApi;
