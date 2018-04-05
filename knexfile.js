if (process.env.NODE_ENV === 'test') require('dotenv').load()

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://coluwchbvnrhyo:2839263e96b05ba1114f13383da4f5f958221a79b8beb3f69796f11e08f11b32@ec2-54-163-240-54.compute-1.amazonaws.com:5432/dfipqkctg81e4v'
  },
  test: {
    client: 'pg',
    connection: `${process.env.DATABASE_URL}/${process.env.DATABASE_NAME}`
  }
}
