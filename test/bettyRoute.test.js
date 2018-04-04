require("dotenv").load()
const chai = require('chai')
const should = chai.should()
const chaiHttp = require('chai-http')
const server = require('../app')
const chaiAsPromised = require('chai-as-promised')
const knex = require('../queries/db')
const config = require('../knexfile').test

chai.use(chaiHttp)

chai.use(chaiAsPromised)

describe('API Routes - BETTY', () => {

  before(function () {
    const tmpConnection = require('knex')({ client: 'pg', connection: process.env.DATABASE_URL })
    return tmpConnection.raw(`CREATE DATABASE ${process.env.DATABASE_NAME};`)
      .catch(() => Promise.resolve('Everything is OK'))
      .then(() => global.knex = require('../queries/db'))
      .then(() => knex.migrate.rollback(config))
      .then(() => knex.migrate.latest(config))
      .then(() => knex.seed.run())
      .catch(() => console.log(`Migrations or seeds failed.`))
  })

  describe('Get all requests', () => {
    it('should get all requests', done => {
      chai.request(server)
      .get('/shifts/requests')
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json; // jshint ignore:line
        res.body.result.should.be.a('array');
        res.body.result[0].should.have.property('id');
        res.body.result[0].should.have.property('employee_id');
        res.body.result[0].should.have.property('shift_id');
        res.body.result[0].should.have.property('start');
        res.body.result[0].should.have.property('date');
        done()
      })
    })
  })

  describe('Release shift', () => {
    it('update request_id of one user\'s shift given the shift_id', done => {
      const shiftId = 1
      const request_id = 31
      chai.request(server)
      .patch(`/shifts/user-shifts/${shiftId}`)
      .send({ request_id })
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json; // jshint ignore:line
        res.body.result.should.be.a('object');
        res.body.result.should.have.property('id');
        res.body.result.should.have.property('shift_id');
        res.body.result.should.have.property('start');
        res.body.result.should.have.property('date');
        res.body.result.should.have.property('request_id');
        res.body.result.request_id.should.equal(31);
        done()
      })
    })
  })

  describe('Delete request', () => {
    it('delete request from requests table given the request_id', done => {
      const request_id = 1
      chai.request(server)
        .delete(`/shifts/requests/${request_id}`)
        .end((err, res) => {
          res.should.have.status(204);
          done()
        })
    })
  })

  describe("Get all user'\s shifts", () => {
    it("get all user'\s shifts from the employees_shifts table", done => {
      chai.request(server)
        .get('/shifts')
        .set('authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjN9LCJsb2dnZWRJbiI6dHJ1ZSwiZXhwIjoxNTIyODAyNjI5LjczMSwiaWF0IjoxNTIyNzkyNjI5fQ.VgR7GFul-yglwHrRAyi1ME3M0BGU9jed1y-6m8eLmRg')
        .end((err, res) => {
          console.log('resssssss',res.body)
          res.body.should.be.a('array')
          res.body[0].should.have.property('date')
          res.body[0].should.have.property('start')
          res.body[0].should.have.property('first_name')
          res.body[0].should.have.property('employee_id')
          res.should.have.status(200);
          done()
      })
    })
  })

})
