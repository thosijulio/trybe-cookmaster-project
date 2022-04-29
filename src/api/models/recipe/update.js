const { ObjectId } = require('mongodb');
const connection = require('../connection');

const update = async (id, recipe) => {
  const db = await connection();
  const { value } = await db.collection('recipes')
    .findOneAndUpdate({ _id: ObjectId(id) }, { $set: { ...recipe } }, { returnOriginal: false });
  return value; 
};

module.exports = update;
