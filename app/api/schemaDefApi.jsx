import fetch from 'isomorphic-fetch';

class SchemaDefApi {
  static createSchemaDef(schemaDef, sessionId) {
    return fetch('/api/schema-defs', {
      method: 'POST',
      headers: {
        'auth-key': sessionId,
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(schemaDef),
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

  static loadSchemaDef(id, sessionId) {
    return fetch(`/api/schema-defs/${id}`, {
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

  static deleteSchemaDef(id, sessionId) {
    return fetch(`/api/schema-defs/${id}`, {
      method: 'DELETE',
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
    }, error => (
      error
    ));
  }
}

export default SchemaDefApi;
