const { MongoClient } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');

const connection = new MongoMemoryServer();
const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connectionMock = async () => {
  const URL_MOCK = await connection.getUri();

  return MongoClient.connect(URL_MOCK, OPTIONS);
};

module.exports = connectionMock;
