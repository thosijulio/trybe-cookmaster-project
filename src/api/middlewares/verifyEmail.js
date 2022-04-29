const service = require('../services/index');

const verifyEmail = async (req, res, next) => {
  const { email } = req.body;

  // regex encontrado em: https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail
  
  const isEmailValid = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(email);

  if (isEmailValid) {
    const emailExists = await service.userService.findByEmail(email);
    if (emailExists) {
      return next({
      message: 'Email already registered',
      status: 409,
    });
    }

    return next();
  }

  return next({
    message: 'Invalid entries. Try again.',
    status: 400,
  });
};

module.exports = verifyEmail;
