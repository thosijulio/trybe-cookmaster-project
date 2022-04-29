const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');
const { MongoClient } = require('mongodb');
const jwt = require('jsonwebtoken');

const server = require('../../api/app');
const connectionMock = require('../connectionMock');

const { expect } = chai;

chai.use(chaiHttp);

describe('USERS/', () => {
  let connection;

  before(async () => {
    connection = await connectionMock();
    sinon.stub(MongoClient, 'connect').resolves(connection);
  });

  after(() => {
    MongoClient.connect.restore();
  });

  describe('Quando não é passado usuário', () => {
    let response;

    before(async() => {
      response = await chai.request(server).post('/users').send({});
    });

    it('Retorna um objeto', () => {
      console.log(response);
      expect(response).to.have.status(400);
    });
  });
});
