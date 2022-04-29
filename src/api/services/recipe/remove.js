const recipeModel = require('../../models/recipe');

const remove = async (id) => {
  const result = await recipeModel.remove(id);
  return result;
};

module.exports = remove;
