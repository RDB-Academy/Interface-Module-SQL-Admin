import fetch from 'isomorphic-fetch';

class SchemaDefApi {
  static loadSchemaDefList(sessionId) {
    return fetch('/admin/api/schemaDef', {
      headers: {
        'auth-key': sessionId,
      },
    }).then((response) => {
      if (response.status !== 200) {
        const error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
      return response.json();
    }, error => (
      error
    ));
  }
}

export default SchemaDefApi;
