import BaseAPI from './BaseAPI';

class ColumnDefAPI extends BaseAPI {
  static objectUrl = '/column-defs';

  static create = (sessionId, columnDef) => (
    BaseAPI.myFetch(ColumnDefAPI.objectUrl, sessionId, 'POST', columnDef)
  )

  static read = (sessionId, columnDefId) => (
    BaseAPI.myFetch(`${ColumnDefAPI.objectUrl}/${columnDefId}`, sessionId)
  )
}

export default ColumnDefAPI;
