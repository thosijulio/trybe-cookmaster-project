const model = require('../../models');

const verify = async (data) => {
  const isEmailValid = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(data.email);
  if (isEmailValid) {
    const user = await model.userModel.findByEmail(data.email);
    if (!user || user.password !== data.password) throw new Error();
  } else throw new Error();
};

module.exports = verify;