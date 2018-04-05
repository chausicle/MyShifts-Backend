require("dotenv").load()
const chai = require("chai")
      should = chai.should()
      chaiHttp = require("chai-http")
      server = require("../app")
      config = require("../knexfile").test
      bcrypt = require('bcryptjs')

chai.use(chaiHttp)
chai.use(require("chai-as-promised"))

describe('API Routes', () => {
  beforeEach(() => {
    const tmpConnection = require('knex')({ client: 'pg', connection: process.env.DATABASE_URL })
    return tmpConnection.raw(`CREATE DATABASE ${process.env.DATABASE_NAME};`)
      .catch(() => Promise.resolve('Everything is OK'))
      .then(() => global.knex = require('../queries/db'))
      .then(() => knex.migrate.rollback(config))
      .then(() => knex.migrate.latest(config))
      .then(() => knex.seed.run())
      .catch(() => console.log(`Migrations or seeds failed.`))
  })

  describe('#POST /login', () => {
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

  //written by jon g88
    describe('#POST /signup', () => {
      it('should add new user on signup', done => {
        chai.request(server)
        .post('/signup')
        .send({
          first_name: 'Justin',
          last_name: 'Baize',
          email: 'justin.baize@galvanize.com',
          password: 'martial arts'
        })
        .end((err, res) => {
          res.should.have.status(201);
          res.should.be.json;
          res.body.should.be.a('object')
          res.body.should.have.property('first_name')
          res.body.first_name.should.equal('Justin')
          res.body.should.have.property('last_name')
          res.body.last_name.should.equal('Baize')
          res.body.should.have.property('email')
          res.body.email.should.equal('justin.baize@galvanize.com')
          res.body.should.have.property('password')
          let verifyPass = bcrypt.compareSync('martial arts', res.body.password)
          verifyPass.should.equal(true)
          done()
        })
      })
    })

    describe('#GET /requests', () => {
      it('should get all requests', done => {
        chai.request(server)
        .get('/requests')
        .set('authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjF9LCJsb2dnZWRJbiI6dHJ1ZSwiZXhwIjoxNTIyOTU2NDEwLjIxMSwiaWF0IjoxNTIyOTQ2NDEwfQ.mTp9NbFokqkhy-_DQByefVKdv7QTxux0uNH845teSEE')
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

    describe('#POST /requests', () => {
      it('should add a request and return created request', done => {
        chai.request(server)
        .post('/requests')
        .send({
          employee_id: 1,
          shift_id: 41,
          start: '14:00:00',
          date: '2018-03-31'
        })
        .set('authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjF9LCJsb2dnZWRJbiI6dHJ1ZSwiZXhwIjoxNTIyOTU2NDEwLjIxMSwiaWF0IjoxNTIyOTQ2NDEwfQ.mTp9NbFokqkhy-_DQByefVKdv7QTxux0uNH845teSEE')
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

    describe('#DELETE /requests/:id', () => {
      it('delete request from requests table given the request_id', done => {
        const request_id = 1
        chai.request(server)
          .delete(`/requests/${request_id}`)
          .set('authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjF9LCJsb2dnZWRJbiI6dHJ1ZSwiZXhwIjoxNTIyOTU2NDEwLjIxMSwiaWF0IjoxNTIyOTQ2NDEwfQ.mTp9NbFokqkhy-_DQByefVKdv7QTxux0uNH845teSEE')
          .end((err, res) => {
            res.should.have.status(204);
            done()
          })
      })
    })

    describe("#GET /shifts", () => {
      it("get all user'\s shifts from the employees_shifts table", done => {
        chai.request(server)
          .get('/shifts')
          .set('authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjF9LCJsb2dnZWRJbiI6dHJ1ZSwiZXhwIjoxNTIyOTU2NDEwLjIxMSwiaWF0IjoxNTIyOTQ2NDEwfQ.mTp9NbFokqkhy-_DQByefVKdv7QTxux0uNH845teSEE')
          .end((err, res) => {
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

    describe('#PATCH /shifts', () => {
      it('update request_id of one user\'s shift given the shift_id', done => {
        const employee_id = 2
        const shift_id = 37
        const userId = 1
        chai.request(server)
        .patch(`/shifts`)
        .send({ employee_id, shift_id, userId })
        .set('authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjF9LCJsb2dnZWRJbiI6dHJ1ZSwiZXhwIjoxNTIyOTU2NDEwLjIxMSwiaWF0IjoxNTIyOTQ2NDEwfQ.mTp9NbFokqkhy-_DQByefVKdv7QTxux0uNH845teSEE')
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json; // jshint ignore:line
          res.body.result.should.be.a('object');
          res.body.result.should.have.property('employee_id');
          res.body.result.employee_id.should.equal(1);
          res.body.result.should.have.property('shift_id');
          res.body.result.shift_id.should.equal(37);
          done()
        })
      })
    })
})
