const jwt = require('jsonwebtoken');

// Example middleware that checks if token is valid
function validateUser(req, res, next) {
  jwt.verify(req.headers['x-access-token'], req.app.get('secretKey'), function(
    err,
    decoded
  ) {
    if (err) {
      res.status(400).send({ status: 'error', message: err.message, data: null });
    } else {
      req.body.boardId = decoded.id;
      next();
    }
  });
}

module.exports = validateUser;
