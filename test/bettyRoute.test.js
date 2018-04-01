process.env.NODE_ENV = 'test';


const chai = require('chai')
const should = chai.should()
const chaiHttp = require('chai-http')
const server = require('../app')
const chaiAsPromised = require('chai-as-promised')
const knex = require('../queries/db')
const config = require('../knexfile').test

chai.use(chaiHttp)

chai.use(chaiAsPromised)

describe('API Routes', () => {

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

  describe('Relesase shift', () => {
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

})