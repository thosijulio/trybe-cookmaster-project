const create = require('./create');
const findByEmail = require('./findByEmail');

const userModel = {
  create,
  findByEmail,
};

module.exports = userModel;
