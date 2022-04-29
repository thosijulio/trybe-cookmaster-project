const model = require('../../models/index');

const create = async (user) => {
  const { _id, name, email, role } = await model.userModel.create(user);
  return {
    _id,
    name,
    email,
    role,
  };
};

module.exports = create;
