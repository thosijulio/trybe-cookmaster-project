const service = require('../services');

const verifyLogin = async (req, res, next) => {
  const data = req.body;
  if (!data || !data.email || !data.password) {
    return next({ status: 401, message: 'All fields must be filled' });
  }

  try {
    await service.loginService.verify(data);
  } catch (error) {
    next({ status: 401, message: 'Incorrect username or password' });
  }
  return next();
};

module.exports = verifyLogin;
