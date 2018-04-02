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

describe('API Routes - BRADY', () => {

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


  describe('GET all user shifts', () => {
    it('should get all user shifts from user_shifts table', done => {
      chai.request(server)
      .get(`/shifts/user-shifts`)
      .end((err, res) => {
        res.should.have.status(200)
        res.should.be.json
        res.body.result.should.be.an('array')
        for (var i = 0; i < res.body.result.length; i++) {
          res.body.result[i].should.have.property('id')
          res.body.result[i].id.should.be.a('number')
          res.body.result[i].should.have.property('shift_id')
          res.body.result[i].shift_id.should.be.a('number')
          res.body.result[i].should.have.property('start');
          res.body.result[i].start.should.be.a('string')
          res.body.result[i].should.have.property('date');
          res.body.result[i].date.should.be.a('string')
          res.body.result[i].should.have.property('request_id')
          res.body.result[i].request_id.should.be.a('number')
          res.body.result[i].should.have.property('created_at')
          res.body.result[i].should.have.property('updated_at')
        }
        res.body.result[1].id.should.equal(2)
        res.body.result[1].shift_id.should.equal(4)
        res.body.result[1].start.should.equal('10:00:00');
        res.body.result[1].date.should.equal('2018-03-22T07:00:00.000Z')
        res.body.result[1].request_id.should.equal(2)

        done()
      })
    })
  })

  describe('GET one shift by ID', () => {
    it('should get one shift matching ID 49', done => {
      chai.request(server)
      .get(`/shifts/49`)
      .end((err, res) => {
        res.should.have.status(200)
        res.should.be.json
        res.body.result.should.be.a('object')
        res.body.result.should.have.property('start');
        res.body.result.start.should.equal('10:00:00');
        res.body.result.should.have.property('date');
        res.body.result.date.should.equal('2018-04-06T07:00:00.000Z');
        done()
      })
    })
  })

  describe('POST new request to requests table', () => {
    it('should add a request and return created request', done => {
      chai.request(server)
      .post('/shifts/requests')
      .send({
        employee_id: 1,
        shift_id: 41,
        start: '14:00:00',
        date: '2018-03-31'
      })
      .end((err, res) => {
        res.should.have.status(201);
        res.should.be.json; // jshint ignore:line
        res.body.result.should.be.a('object');
        res.body.result.should.have.property('employee_id')
        res.body.result.employee_id.should.equal(1)
        res.body.result.should.have.property('shift_id');
        res.body.result.shift_id.should.equal(41);
        res.body.result.should.have.property('start');
        res.body.result.start.should.equal('14:00:00');
        res.body.result.should.have.property('date');
        res.body.result.date.should.equal('2018-03-31T07:00:00.000Z');
        res.body.result.should.have.property('id');
        res.body.result.id.should.be.a('number')
        res.body.result.should.have.property('created_at')
        res.body.result.should.have.property('updated_at')
        done();
      });
    });
    });

  describe('DELETE one user shift by ID', () => {
    it('should delete one user shift matching shift_id 14', done => {
      chai.request(server)
      .delete(`/shifts/user-shifts/14`)
      .end((err, res) => {
        res.should.have.status(204)
        done()
      })
    })
  })

})
