const service = require('../../services');

const create = async (req, res) => {
  const recipe = req.body;
  const { userId } = req;
  const result = await service.recipeService.create({ userId, ...recipe });

  return res.status(201).json({ recipe: result });
};

module.exports = create;
