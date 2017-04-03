import BaseAPI from './BaseAPI';

class ColumnDefAPI extends BaseAPI {
  static objectUrl = '/column-defs';

  static create = (sessionId, columnDef) => (
    BaseAPI.myFetch(ColumnDefAPI.objectUrl, sessionId, 'POST', columnDef)
  )

  static read = (sessionId, id) => (
    BaseAPI.myFetch(`${ColumnDefAPI.objectUrl}/${id}`, sessionId)
  )
}

export default ColumnDefAPI;
