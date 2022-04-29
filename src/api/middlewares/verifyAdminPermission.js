const jwt = require('jsonwebtoken');

const API_SECRET = 'password';

const verifyAdminPermission = async (req, res, next) => {
  const { authorization } = req.headers;
  const { data: { role } } = jwt.verify(authorization, API_SECRET);
  if (!authorization || role !== 'admin') {
    return next({ status: 403, message: 'Only admins can register new admins' });
  }

  return next();
};

module.exports = verifyAdminPermission;