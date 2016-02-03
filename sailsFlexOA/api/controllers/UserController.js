/*
 * UserController
 */

 module.exports = {
   login: function (req, res) {

    // See `api/responses/login.js`
    return res.login({
       username: req.param('username'),
       password: req.param('password'),
       successRedirect: '/',
       invalidRedirect: '/login'
     });
   },

   register: function (req, res) {


     // Attempt to signup a user using the provided parameters
     User.signup({
       username: req.param('username'),
       password: req.param('password')
     }, function (err, user) {
       // res.negotiate() will determine if this is a validation error
       // or some kind of unexpected server error, then call `res.badRequest()`
       // or `res.serverError()` accordingly.
       if (err) return res.negotiate(err);


       // Go ahead and log this user in as well.
       // We do this by "remembering" the user in the session.
       // Subsequent requests from this user agent will have `req.session.me` set.
       req.session.me = user.id;

       // If this is not an HTML-wanting browser, e.g. AJAX/sockets/cURL/etc.,
       // send a 200 response letting the user agent know the signup was successful.
       if (req.wantsJSON) {
         return res.ok('Signup successful!');
       }

       // Otherwise if this is an HTML-wanting browser, redirect to /welcome.
       return res.redirect('/index');
     });
   }

 };
