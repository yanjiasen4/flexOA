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
      minLength:1,
      maxLength:50
    },

    ownerID: {
      type: 'integer'
    },
    ownerName:{
      type: 'string',
      minLength:1,
      maxLength:20
    }
  }
}
