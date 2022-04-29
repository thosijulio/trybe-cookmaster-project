const connection = require('../connection');

const findByEmail = async (email) => {
  const db = await connection();
  return db.collection('users').findOne({ email });
};

module.exports = findByEmail;
