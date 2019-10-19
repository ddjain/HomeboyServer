//TODO Auth service is not working need to fix this.
const jwt = require('jsonwebtoken');
const secret = 'mykey';
const authService = () => {
  const issue = (payload) => jwt.sign(payload, secret, { expiresIn: 10800 });
  const verify = (token, cb) => jwt.verify(token, secret, {}, cb);
  return {
    issue,
    verify
  };
};

module.exports = authService;
