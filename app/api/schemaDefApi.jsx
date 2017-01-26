import fetch from 'isomorphic-fetch';

class SchemaDefApi {
  static loadSchemaDefList(sessionId) {
    return fetch('/api/schema-defs', {
      headers: {
        'auth-key': sessionId,
        accept: 'application/json',
      },
    }).then((response) => {
      if (response.status !== 200) {
        const error = new Error(response.status);
        error.httpCode = error.status;
        error.httpText = response.statusText;
        error.body = null;
        if (response.headers.get('Content-Type').includes('application/json')) {
          error.body = response.json();
        }
        throw error;
      }
      return response.json();
    }, error => (
      error
    ));
  }
}

export default SchemaDefApi;
