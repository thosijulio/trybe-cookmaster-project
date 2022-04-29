const { MongoClient } = require('mongodb');

require('dotenv').config();

const MONGO_DB_URL = process.env.MONGO_DB_URL || 'mongodb://127.0.0.1:27017';
const DB_NAME = process.env.DB_NAME || 'Cookmaster';

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
