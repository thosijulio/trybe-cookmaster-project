const connection = require('../connection');

const create = async (data) => {
  const db = await connection();
  return (await db.collection('recipes').insertOne(data)).ops[0];
};

module.exports = create;