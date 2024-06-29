/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  
    return knex.schema.createTable('users', (table) => {
        table.increments('id').primary(); // Auto-incrementing integer primary key
        table.string('username', 255).notNullable(); // String column with max length 255, not nullable
        table.string('email', 255).unique().notNullable(); // Unique email address, not nullable
        table.string('password', 255).notNullable(); // Hashed password, not nullable
      })
      .then(() => {
        console.log('Table users created successfully!');
      })
      .catch((error) => {
        console.error('Error creating table:', error);
      })
    };
    
    /**
     * @param { import("knex").Knex } knex
     * @returns { Promise<void> }
     */
    exports.down = function(knex) {
      return knex.schema.dropTableIfExists("users")
    };
    