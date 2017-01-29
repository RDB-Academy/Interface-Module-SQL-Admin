import fetch from 'isomorphic-fetch';

const uriPrefix = '/api';

const createFetch = (uri, sessionID, method = 'GET', body) => {
  const fullUri = `${uriPrefix}${uri}`;
  const settings = {
    method,
    headers: {
      accept: 'application/json',
      'auth-key': sessionID,
    },
  };

  if (method === 'POST' || method === 'PATCH' || method === 'POST') {
    settings.headers['Content-Type'] = 'application/json';
    settings.body = JSON.stringify(body);
  }

  return fetch(fullUri, settings)
      .then((response) => {
        if (!response.ok) {
          const error = new Error(response.status);
          error.httpCode = error.status;
          error.httpText = response.statusText;
          error.body = null;
          if (response.headers.get('Content-Type').includes('application/json')) {
            error.body = response.json();
          }
          throw error;
        }
        if (response.headers.get('content-type') !== null && response.headers.get('content-type').includes('application/json')) {
          return response.json();
        }
        return response.text();
      }, error => error);
};

class SchemaDefApi {
  static createSchemaDef(schemaDef, sessionId) {
    return createFetch('/schema-defs', sessionId, 'POST', schemaDef);
  }

  static loadSchemaDefList(sessionId) {
    return createFetch('/schema-defs', sessionId);
  }

  static loadSchemaDef(id, sessionId) {
    return createFetch(`/schema-defs/${id}`, sessionId);
  }

  static deleteSchemaDef(id, sessionId) {
    return createFetch(`/schema-defs/${id}`, sessionId, 'DELETE');
  }
}

export default SchemaDefApi;
