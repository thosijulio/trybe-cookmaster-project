const { ObjectId } = require('mongodb');
const recipeModel = require('../../models/recipe');

const findById = async (id) => {
  if (ObjectId.isValid(id)) {
    return recipeModel.findById(id);
  }
};

module.exports = findById;
