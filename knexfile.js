module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/myShifts_dev'
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/myShifts_test'
  }
}
