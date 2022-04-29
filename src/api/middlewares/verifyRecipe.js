const verifyRecipe = (req, res, next) => {
  const { ingredients, name, preparation } = req.body;

  if (!ingredients || !name || !preparation) {
    return next({ status: 400, message: 'Invalid entries. Try again.' });
  }

  return next();
};

module.exports = verifyRecipe;
