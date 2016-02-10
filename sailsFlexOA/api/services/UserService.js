module.exports = {
  createUser(user){
    User.create(user).exec(function createCB(err, created){
      if(err){
        console.error(err);
        return null;
      }else{
        return created;
      }
    });
  }
}