require("dotenv").load()
const chai = require("chai");
      expect = chai.expect;
      should = chai.should();
      chaiHttp = require("chai-http");
      server = require("../app");
      config = require("../knexfile").test;

chai.use(chaiHttp);
chai.use(require("chai-as-promised"));

describe("API Routes - JUSTIN", () => {
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

  describe("GET /shifts/user-shifts", () => {
    it ("Should get all user shifts", (done) => {
      chai.request(server)
        .get("/shifts/user-shifts")
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a("object");
          res.body.result.should.be.a("array");
          res.body.result[0].should.have.property("id");
          res.body.result[0].should.have.property("shift_id");
          res.body.result[0].should.have.property("start");
          res.body.result[0].should.have.property("date");
          res.body.result[0].should.have.property("request_id");
          res.body.result[0].should.have.property("created_at");
          res.body.result[0].should.have.property("updated_at");
          done();
        });
    });
  });
});
