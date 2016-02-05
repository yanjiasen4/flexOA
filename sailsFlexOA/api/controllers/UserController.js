/*
 * UserController
 */

 module.exports = {
   test: function(req,res){
     var user = new Object();
     user.username='test';
     user.password='test';
     user.realname='test';

     User.create(user).exec(function createCB(err, created){
       if(err){
         // 如果有误，返回错误

         res.view('/',{err:err});
         }else{
           // 否则，将新创建的用户登录
           return res.redirect('/');
         }
     });
   },

   register: function(req,res){
       var user = req.allParams();

       User.create(user).exec(function createCB(err, created){
           if(err){
              // 如果有误，返回错误
              console.error(err);
              //res.view('/',{err:err});
              return res.ok({
                error: 1
              },'register');
           }else{
              // 否则，将新创建的用户登录
              req.session.me = created;
              return res.redirect('/');
           }
       });

   },

   beforelogin: function(req,res){
      var user = req.allParams();
      return res.ok({
        message: '成功了'
      },'login');
   },
   login: function(req,res){
      var user = req.allParams();
      User.find(user).exec(function findCB(err, found){
        console.error('attempt login');
        if(found.length)
        {
          console.error('We found '+found[0].username);
          req.session.me = found[0];
          return res.redirect('/');
        }
        else
        {
          console.error('失败了');
          return res.ok({
            error: 1,
            message: '你个非洲人'
          },'login');
        }
      });
   },
   logout: function(req,res) {
     console.error(req.session.me+'用户登出成功!');
     req.session.me = null;
     return res.redirect('login');
   },

   //@ binding policies/hasLogged
   setting: function(req,res) {
     return res.view('user');
   },

   // POST /uploadAvatar
   uploadAvatar: function(req,res) {
     console.error('uploading...');
     req.file('avatar').upload({
       maxBytes: 10000000
     }, function whenDone(err, uploadFiles) {
       if (err) return res.serverError(err);
       if (uploadFiles.length === 0) {
         return res.badRequest('No filw was uploaded', 'errorPage/400');
       }
       User.update(req.session.me, {
         avatarUrl: require('util').format('%s/user/avatar/%s', sails.getBaseUrl(), req.session.me),
         avatarFd:  uploadFiles[0].fd
       })
       .exec(function (err){
         if (err) return res.negotiate(err);
         console.error("upload avatar success!");
         return res.ok({rc: 1, message: '头像上传成功', hasOpt: '1', optIndex: '1'}, 'user');
       })
     });
   },

   // GET /user/avatar/:id
  avatar: function (req, res){

     req.validate({
       id: 'string'
     });

     User.findOne(req.param('id')).exec(function (err, user){
       if (err) return res.negotiate(err);
       if (!user) return res.notFound();

       // User has no avatar image uploaded.
       // (should have never have hit this endpoint and used the default image)
       if (!user.avatarFd) {
         return res.notFound();
       }

       var SkipperDisk = require('skipper-disk');
       var fileAdapter = SkipperDisk();

       // Stream the file down
       fileAdapter.read(user.avatarFd)
       .on('error', function (err){
         return res.serverError(err);
       })
       .pipe(res);
    });
  },
  changePassword: function (req, res){
     console.error('开始改了');
    var user = req.session.me;
    var oldPassword = req.param('oldPassword');
    var newPassword = req.param('newPassword');
    var newConfirmedPassword = req.param('newConfirmedPassword');
    if(user.password == oldPassword)
    {
      if(newConfirmedPassword == newPassword)
      {
        User.update(req.session.me,{password: newPassword})
       .exec(function (err){
         if (err) return res.negotiate(err);
         console.error("修改成功!");
       });
        user.password=newPassword;
        return res.ok({rc: 1, message: '密码修改成功', hasOpt: '1', optIndex: '2'}, 'user');
      }
      else
      {
     console.error('确认错误');
        return res.ok({rc: 0, message: '确认密码错误', hasOpt: '1', optIndex: '2'}, 'user');
      }
    }
    else
    {
     console.error('当前密码错误');
        return res.ok({rc: 0, message: '当前密码错误', hasOpt: '1', optIndex: '2'}, 'user');
    }
  }

};
