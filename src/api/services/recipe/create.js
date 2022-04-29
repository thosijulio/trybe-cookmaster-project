const model = require('../../models');

const create = async (data) => {
  const result = await model.recipeModel.create(data);
  return result;
};

module.exports = create;
