'use strict';

const jwt = require('jsonwebtoken');
const tokenSecret = 'My Secret';
const expiresIn = '1h';

function generateToken(data) {
    const token = jwt.sign({data}, tokenSecret, {expiresIn});
    return token;
};

  function verifyToken(token) {
     return jwt.verify(token, tokenSecret);
  }
module.exports = {generateToken, verifyToken };