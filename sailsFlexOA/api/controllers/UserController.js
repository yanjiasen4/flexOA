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
       //return res.redirect('/');
       var user = req.allParams();
       //console.error('fafafa');
       //console.error(user);

       User.create(user).exec(function createCB(err, created){
           if(err){
              // 如果有误，返回错误
              console.error('重复的用户名');
               //res.view('/',{err:err});
               return res.redirect('/');
           }else{
               // 否则，将新创建的用户登录
                   return res.redirect('/');
           }
       });

   },

   beforelogin: function(req,res){
      //return res.redirect('/');
      var user = req.allParams();
      //console.error('fafafa');
      //console.error(user);
      return res.ok({
        message: '成功了'
      },'login');

   },
   login: function(req,res){
      //return res.redirect('/');
      //var user = req.allParams();
      //console.error('fafafa');
      //console.error(user);
      var user = req.allParams();
      User.find(user).exec(function findCB(err, found){
        if(found.length)
        {
          console.error('We found '+found.username);
          return res.ok({
            message: '大成功了'
          },'login');
        }
        else
        {
          console.error('不知道');
          return res.ok({
            message: '失败了成功了'
          },'login');
        }
      });

   },
 };
