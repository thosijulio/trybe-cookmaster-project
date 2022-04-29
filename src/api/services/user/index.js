const create = require('./create');
const findByEmail = require('./findByEmail');

const userService = { 
  create,
  findByEmail,
};

module.exports = userService;
