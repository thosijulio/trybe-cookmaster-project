const recipeService = require('../../services/recipe');

const update = async (req, res) => {
  const recipe = req.body;
  const { id } = req.params;

  const result = await recipeService.update(id, recipe);

  res.status(200).json(result);
};

module.exports = update;
