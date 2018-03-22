module.exports.inMLE = function inMLE() {
  return true;
}

module.exports.dbConnector = function dbConnector() {
  return Interop.import('poly_sync_connector');
}
