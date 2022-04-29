const recipeService = require('../../services/recipe');

const findById = async (req, res, next) => {
  const { id } = req.params;
  const recipe = await recipeService.findById(id);
  return recipe ? res.status(200).json(recipe) : next({ status: 404, message: 'recipe not found' });
};

module.exports = findById;
