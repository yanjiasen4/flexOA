// dao/userMapping.js
// CRUD SQL语句
var user = {
    insert:'INSERT INTO user(username, password) VALUES(?,?)',
    update:'update user set password=? where id=?',
    delete: 'delete from user where id=?',
    queryById: 'select * from user where id=?',
    queryAll: 'select * from user',
    validate: 'select * from user where username=? and password=?'
};

module.exports = user;