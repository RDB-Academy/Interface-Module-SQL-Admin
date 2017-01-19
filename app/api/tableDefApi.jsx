import fetch from 'isomorphic-fetch';

class TableDefApi {
  static loadTableDefById(sessionId, tableDefId) {
    return fetch(`/admin/api/tableDef/${tableDefId}`, {
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
