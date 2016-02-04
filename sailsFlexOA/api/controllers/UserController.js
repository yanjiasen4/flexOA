/*
 * UserController
 */

 module.exports = {
   test: function(req,res){
     var user = new Object();
     user.username='test';
     user.password='test';
     user.realname='test';
   //User.create(user);
     console.error('fafafa');

     User.create(user).exec(function createCB(err, created){
       if(err){
         // 如果有误，返回错误
         console.error('fafafa');
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

 };
