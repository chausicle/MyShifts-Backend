
const chai = require('chai')
const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../app')

chai.use(chaiHttp);

describe('test login route', () => {
  it('Should return a token', (done) => {
    chai.request(server)
      .post('/login')
      .send({
        email: 'chausicle@gmail.com',
        password: 'iamjustin'
      })
      .end((error, res) => {
        
      })
  })
})
