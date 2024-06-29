/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('customers', function(table) {
        table.varchar('id').primary();
        table.timestamp('created_at');
        table.varchar('created_by');
        table.timestamp('updated_at');
        table.varchar('updated_by');
        table.varchar('org_id');
        table.varchar('name');
        table.varchar('tin').nullable();
        table.varchar('deleted');
        table.varchar('default_currency');
        table.varchar('tax_exempt');
        table.varchar('tax_use_code').nullable();
        table.varchar('partner');
        table.varchar('external_id').nullable();
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
