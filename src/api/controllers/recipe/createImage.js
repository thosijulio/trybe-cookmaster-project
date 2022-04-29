const insertImage = require('../../models/recipe/insertImage');

const createImage = async (req, res) => {
  const { file } = req;
  const { id } = req.params;

  const newRecipe = await insertImage(id, `localhost:3000/src/uploads/${file.filename}`);
  res.status(200).json(newRecipe);
};

module.exports = createImage;
