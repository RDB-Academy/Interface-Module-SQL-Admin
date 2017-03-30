import BaseAPI from './BaseAPI';

class SchemaDefAPI extends BaseAPI {
  static create = (sessionId, schemaDef) => (
    BaseAPI.myFetch('/schema-defs', sessionId, 'POST', schemaDef)
  )

  static readAll = sessionId => (
    BaseAPI.myFetch('/schema-defs', sessionId)
  )

  static read = (sessionId, id) => (
    BaseAPI.myFetch(`/schema-defs/${id}`, sessionId)
  )

  static update = (sessionId, id, schemaDef) => (
    BaseAPI.myFetch(`/schema-defs/${id}`, sessionId, 'PATCH', schemaDef)
  )

  static delete = (sessionId, id) => (
    BaseAPI.myFetch(`/schema-defs/${id}`, sessionId, 'DELETE')
  )
}

export default SchemaDefAPI;
