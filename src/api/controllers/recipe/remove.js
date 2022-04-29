const { recipeService } = require('../../services');

const remove = async (req, res, next) => {
  const { id } = req.params;
  try {
    await recipeService.remove(id);
    res.status(204).end();
  } catch (error) {
    next({ status: 500, message: 'internal server error' });
  }
};

module.exports = remove;
