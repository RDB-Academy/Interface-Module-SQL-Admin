import fetch from 'isomorphic-fetch';

class TaskApi {
  static loadTaskList(sessionId) {
    return fetch('/api/tasks', {
      headers: {
        'auth-key': sessionId,
      },
    }).then(response => (
      response.json()
    )).catch(error => (
      error
    ));
  }
}

export default TaskApi;
