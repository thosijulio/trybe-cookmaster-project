const { ObjectId } = require('mongodb');
const connection = require('../connection');

const remove = async (id) => {
  const db = await connection();
  return db.collection('recipes').findOneAndDelete({ _id: ObjectId(id) });
};

module.exports = remove;
