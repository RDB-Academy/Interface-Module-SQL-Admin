import fetch from 'isomorphic-fetch';

class SessionApi {
  static login(credentials) {
    const request = new Request('/api/login', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(credentials),
    });


    return fetch(request).then((response) => {
      if (response.status !== 200) {
        throw new Error('error');
      }
      return response.json();
    }).catch((error) => {
      throw error;
    });
  }

  static logout() {
    return fetch('/api/logout').then(response => (
      response.json()
    )).catch(error => (
      error
    ));
  }
}

export default SessionApi;
