import BaseAPI from './BaseAPI';

class TableDefAPI extends BaseAPI {
  static objectUrl = '/table-defs';

  static create = (sessionId, tableDef) => (
    BaseAPI.myFetch(TableDefAPI.objectUrl, sessionId, 'POST', tableDef)
  )

  static read = (sessionId, id) => (
    BaseAPI.myFetch(`${TableDefAPI.objectUrl}/${id}`, sessionId)
  )
}

export default TableDefAPI;
