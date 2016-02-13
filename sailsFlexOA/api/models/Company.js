module.exports = {
  connection: 'MysqlServer',

  attributes: {
    companyID: {
      type: 'integer',
      primaryKey: true,
      autoIncrement: true,
      unique: true
    },
    companyName: {
      type: 'string',
      size: 100
    },

    ownerID: {
      type: 'integer'
    },
    ownerName:{
      type: 'string',
      size: 20
    }
  }
}
