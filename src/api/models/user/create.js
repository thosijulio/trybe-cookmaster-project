const connection = require('../connection');

const create = async (user) => {
  const conn = await connection();
  return (await conn.collection('users').insertOne(
    { ...user },
  )).ops[0];
};

module.exports = create;
