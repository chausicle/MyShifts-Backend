require("dotenv").load()
const chai = require("chai");
      expect = chai.expect;
      should = chai.should();
      chaiHttp = require("chai-http");
      server = require("../app");
      config = require("../knexfile").test;

chai.use(chaiHttp);
chai.use(require("chai-as-promised"));

describe('test login route', () => {
  before(() => {
    const tmpConnection = require("knex")({ client: "pg", connection: process.env.DATABASE_URL });

    return tmpConnection.raw(`CREATE DATABASE ${process.env.DATABASE_NAME};`)
      .catch(() => Promise.resolve("Everything is OK"))
      .then(() => global.knex = require("../queries/db"))
      .then(() => knex.migrate.rollback(config))
      .then(() => knex.migrate.latest(config))
      .then(() => knex.seed.run())
      .catch(() => console.log(`Migrations or seeds failed.`))
  });

  it('Should return a token', (done) => {
    chai.request(server)
      .post('/login')
      .send({
        email: 'chausicle@gmail.com',
        password: 'iamjustin'
      })
      .end((error, res) => {
        res.headers.should.have.property('authorization')
        res.headers.authorization.should.be.a('string')
        done();
      })
  })
  it('Should return a status 403 when email or password is wrong', (done) => {
    chai.request(server)
      .post('/login')
      .send({
        email: 'fake@gmail.com',
        password: 'password123'
      })
      .end((error, res) => {
        res.should.have.status(403)
        done();
      })
  })
})
