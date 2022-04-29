const connection = require('../connection');

const find = async () => {
  const db = await connection();
  return db.collection('recipes').find().toArray();
};

module.exports = find;