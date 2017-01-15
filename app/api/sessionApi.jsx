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
      console.log('session api');
      console.log(response);
      return response.json();
    }).catch(error => (
      error
    ));
  }
}

export default SessionApi;
