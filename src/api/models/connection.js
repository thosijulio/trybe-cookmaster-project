const { MongoClient } = require('mongodb');

require('dotenv').config();

const { MONGO_DB_URL, DB_NAME } = process.env;

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let connection = null;

module.exports = async () => {
  try {
    connection = connection || (connection = (await MongoClient.connect(
      MONGO_DB_URL, OPTIONS,
      )).db(DB_NAME));
    return connection;
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
