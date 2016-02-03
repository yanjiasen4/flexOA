module.exports = {
  connection: 'MysqlServer',

  attributes: {
    userID: {
      type: 'integer',    
      primaryKey: true,
      autoIncrement: true,
      unique: true
    },
    username: {
      type: 'string',
      unique: true
      size: 45
    },

    password: {
      type: 'string'
    },

    realname: {
      type: 'string',
      minLength:1,
      maxLength:20
    },

    workerID: {
      type: 'integer',
      defaultsTo: -1
      size: 45
    }

  }
}