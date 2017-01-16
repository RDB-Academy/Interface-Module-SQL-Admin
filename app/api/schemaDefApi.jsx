import fetch from 'isomorphic-fetch';

class SchemaDefApi {
  static loadSchemaDefList() {
    return fetch('/api/schemaDef').then((response) => {
      console.log(response);
      return response.json();
    }).catch(error => (
      error
    ));
  }
}

export default SchemaDefApi;
