require("dotenv").load()
const chai = require("chai");
      expect = chai.expect;
      should = chai.should();
      chaiHttp = require("chai-http");
      server = require("../app");
      config = require("../knexfile").test;

chai.use(chaiHttp);
chai.use(require("chai-as-promised"));

describe("API Routes", () => {
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
    it ("Should return a response body", (done) => {
      chai.request(server)
        .get("/shifts/user-shifts")
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a("object");
          res.body.result.should.be.a("array");
          done();
        });

      describe("#Result response body should have the following properties:", () => {
        it ("Should have property id", (done) => {
          chai.request(server)
            .get("/shifts/user-shifts")
            .end((err, res) => {
              res.body.result[0].should.have.property("id");
              done();
            });
        });
        it ("Should have property shift_id", (done) => {
          chai.request(server)
            .get("/shifts/user-shifts")
            .end((err, res) => {
              res.body.result[0].should.have.property("shift_id");
              done();
            });
        });
        it ("Should have property start", (done) => {
          chai.request(server)
            .get("/shifts/user-shifts")
            .end((err, res) => {
              res.body.result[0].should.have.property("start");
              done();
            });
        });
        it ("Should have property date", (done) => {
          chai.request(server)
            .get("/shifts/user-shifts")
            .end((err, res) => {
              res.body.result[0].should.have.property("date");
              done();
            });
        });
        it ("Should have property request_id", (done) => {
          chai.request(server)
            .get("/shifts/user-shifts")
            .end((err, res) => {
              res.body.result[0].should.have.property("request_id");
              done();
            });
        });
        it ("Should have property created_at", (done) => {
          chai.request(server)
            .get("/shifts/user-shifts")
            .end((err, res) => {
              res.body.result[0].should.have.property("created_at");
              done();
            });
        });
        it ("Should have property updated_at", (done) => {
          chai.request(server)
            .get("/shifts/user-shifts")
            .end((err, res) => {
              res.body.result[0].should.have.property("updated_at");
              done();
            });
        });
      });
    });
  });
});
