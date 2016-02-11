module.exports = {
  createUser: function(user,req,res){
    User.create(user).exec(function createCB(err, created){
      if(err){
        console.error(err);
        return res.ok({
          error: 1
        },'register');
      }else{
        req.session.me = created;
        return res.redirect('/');
      }
    });
  }
}