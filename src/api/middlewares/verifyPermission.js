const service = require('../services');

const verifyPermission = async (req, res, next) => {
  const { userId, userRole } = req;
  const { id } = req.params;
  const { userId: userIdRecipe } = await service.recipeService.findById(id);

  if (userRole === 'admin' || userIdRecipe === userId) {
   return next();
  }
  return next({ status: 401, message: 'jwt malformed' });
};

module.exports = verifyPermission;
