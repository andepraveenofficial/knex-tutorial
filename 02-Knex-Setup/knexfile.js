const dotenv = require('dotenv');
dotenv.config();  // Load environment variables


/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */


module.exports = {
  client:"mysql2",
  connection: {
    host: '127.0.0.1',
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  development:{
    client:"mysql2",
    connection: {
      host: '127.0.0.1',
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    },
    migrations: {
      directory: "./db/migrations",
    },
    seeds:{
      directory: "./db/seeds"
    },
  }


};

