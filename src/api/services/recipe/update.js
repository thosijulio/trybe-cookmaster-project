const { ObjectId } = require('mongodb');
const recipeModel = require('../../models/recipe');

const update = async (id, recipe) => {
  if (ObjectId.isValid(id)) {
    return recipeModel.update(id, recipe);
  }
};

module.exports = update;
