const { recipeService } = require('../../services');

const find = async (_req, res) => {
  const recipes = await recipeService.find();
  res.status(200).json(recipes);
};

module.exports = find;
