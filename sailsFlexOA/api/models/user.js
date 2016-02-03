// user.js
// Users attributes
module.exports = {
  attributes: {
    username: {
      type: 'string',
      size: 45,
      required: true
    },

    password: {
      type: 'string',
      size: 45,
      required: true
    }
  },

  signup: function(inputs, cb) {
    // Create a user
    User.create({
      username: inputs.username,
      password: inputs.password
    })
    .exec(cb);
  },

  attemptLogin: function(inputs, cb) {
    // validate username and password
    User.findOne({
      username: inputs.username,
      password: inputs.password
    })
    .exec(cb);
  }
}
