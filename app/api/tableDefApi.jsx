import fetch from 'isomorphic-fetch';

class TableDefApi {
  static createTableDef(sessionId, tableDef) {
    return fetch('/api/table-defs', {
      method: 'POST',
      headers: {
        'auth-key': sessionId,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(tableDef),
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

  static loadTableDefById(sessionId, tableDefId) {
    return fetch(`/api/table-defs/${tableDefId}`, {
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

export default TableDefApi;
