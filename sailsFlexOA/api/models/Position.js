module.exports = {
  connection: 'MysqlServer',

  attributes: {
    positionID: {
      type: 'integer',
      primaryKey: true,
      unipue: true,
      autoIncrement: true
    },
    positionName: {
      type: 'string',
      size: 100
    },
    Authority: {
      type: 'integer',
      defaultsTo: 3
    }
  }
}
