const verifyToken = (req, _res, next) => {
  const { authorization } = req.headers;
  if (!authorization) return next({ status: 401, message: 'missing auth token' });
  return next();
};

module.exports = verifyToken;
