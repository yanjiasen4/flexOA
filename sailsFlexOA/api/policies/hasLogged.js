module.exports = function(req, res, next) {
  console.error('403 forbidden!');
  if (req.session.me) {
    return next();
  }

  return res.forbidden('You are not permitted to perform this action.', 'errorPage/403');
}
