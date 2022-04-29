const { ObjectId } = require('mongodb');
const connection = require('../connection');

const insertImage = async (id, imgPath) => {
  const db = await connection();
  const oldRecipe = await db.collection('recipes').findOne(ObjectId(id));

  const { value } = await db.collection('recipes').findOneAndUpdate(
    { _id: ObjectId(id) },
    { $set: { ...oldRecipe, image: imgPath } },
    { returnOriginal: false },
  );

  return value;
};

module.exports = insertImage;
