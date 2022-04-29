const model = require('../../models');

const find = async () => {
  const result = await model.recipeModel.find();
  return result;
};

module.exports = find;
