const { ObjectId } = require('mongodb');
const connection = require('../connection');

const findById = async (id) => {
  const db = await connection();
  const result = await db.collection('recipes').findOne(new ObjectId(id));
  return result;
}; 

module.exports = findById;
