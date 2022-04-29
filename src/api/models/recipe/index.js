const create = require('./create');
const find = require('./find');
const findById = require('./findById');
const update = require('./update');
const remove = require('./remove');
const insertImage = require('./insertImage');

const recipeModel = {
  create,
  find,
  findById,
  update,
  remove,
  insertImage,
};

module.exports = recipeModel;
