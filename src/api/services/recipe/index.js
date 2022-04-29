const create = require('./create');
const find = require('./find');
const findById = require('./findById');
const update = require('./update');
const remove = require('./remove');

const recipeService = {
  create,
  find,
  findById,
  update,
  remove,
};

module.exports = recipeService;
