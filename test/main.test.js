const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
const expect = chai.expect
const main = require('../queries/main')
const config = require('../knexfile').test
console.log(config);

chai.use(chaiAsPromised)

describe('Shift Queries', () => {
  before(() => {
    const temporaryConnection = require('knex')(config)

    console.log(temporaryConnection);
  //   return temporaryConnection.raw(`CREATE DATABASE myShifts_test;`)
  //     .catch(() => Promise.resolve('Everything is OK'))
  //     .then(() => {
  //       global.knex = require('../queries/db')
  //       console.log(global);
  //     })
  //     .then(() => knex.migrate.latest(config))
  //     .then(() => knex.seed.run())
  //     .catch(() => console.log('Migrations or seeds failed'))
  // })
  })
})
