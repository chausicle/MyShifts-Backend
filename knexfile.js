if (process.env.NODE_ENV !== 'test') require('dotenv').load()

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/myShifts_dev'
  },
  test: {
    client: 'pg',
    connection: `postgres://localhost/myShifts_test`
  }
}
