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
      minLength:1,
      maxLength:200
    }
  }
}
