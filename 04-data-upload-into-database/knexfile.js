/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  client: 'mysql2',
  connection: {
    host: 'localhost', 
    port: '3306',
    user: 'root', 
    password: 'Aa@8185995403', 
    database: 'knex_db1' 
  },

  development: {
    client: 'mysql2',
    connection: {
      host: 'localhost', 
      port: '3306',
      user: 'root', 
      password: 'Aa@8185995403', 
      database: 'knex_db1' 
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
