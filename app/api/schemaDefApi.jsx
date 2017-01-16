import fetch from 'isomorphic-fetch';

class SchemaDefApi {
  static loadSchemaDefList(sessionId) {
    console.log(sessionId);
    return fetch('/api/schemaDef', {
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

export default SchemaDefApi;
