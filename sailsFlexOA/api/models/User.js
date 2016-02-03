/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

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
    }

  }
}