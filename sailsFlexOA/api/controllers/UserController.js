/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	  test: function(req,res){
                    return res.redirect('/');
	  	var user = new Object();
	  	user.username='test';
	  	user.password='test';
	  	user.realname='test';
		//User.create(user);

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
        console.error('fafafa');
        //console.error(user);

        User.create(user).exec(function createCB(err, created){
            if(err){
               // 如果有误，返回错误
               console.error('nonono');
                res.view('/',{err:err});
            }else{
                // 否则，将新创建的用户登录
                    return res.redirect('/');
            }
        });

    },
};

