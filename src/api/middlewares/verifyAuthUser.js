const jwt = require('jsonwebtoken');

const API_SECRET = 'password';

const verifyAuthUser = (req, res, next) => {
  const { authorization } = req.headers;

  try {
    const { data: { _id, role } } = jwt.verify(authorization, API_SECRET);
    req.userId = _id;
    req.userRole = role;
    return next();
  } catch (error) {
    return next({ message: 'jwt malformed', status: 401 });
  }
};

module.exports = verifyAuthUser;
