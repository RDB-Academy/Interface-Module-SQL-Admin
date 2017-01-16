import fetch from 'isomorphic-fetch';

class TaskApi {
  static loadTaskList(sessionId) {
    console.log(sessionId);
    return fetch('/api/task', {
      headers: {
        'auth-key': sessionId,
      },
    }).then((response) => {
      console.log(response);
      return response.json();
    }).catch(error => (
      error
    ));
  }
}

export default TaskApi;
