import BaseAPI from './BaseAPI';

class ForeignKeyAPI extends BaseAPI {
  static objectUrl = '/foreign-keys';

  static create = (sessionId, tableDef) => (
    BaseAPI.myFetch(ForeignKeyAPI.objectUrl, sessionId, 'POST', tableDef)
  )

  static read = (sessionId, id) => (
    BaseAPI.myFetch(`${ForeignKeyAPI.objectUrl}/${id}`, sessionId)
  )
}

export default ForeignKeyAPI;
