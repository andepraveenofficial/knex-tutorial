/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('organizations', function(table) {
        table.varchar('id').primary();
        table.varchar('created_by');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.varchar('updated_by');
        table.timestamp('updated_at').defaultTo(knex.fn.now());
        table.varchar('name');
        table.varchar('status');
        table.varchar('options');
        table.varchar('deleted').defaultTo("FALSE");
        table.varchar('default_currency');
        table.varchar('parent_org_id').nullable();
        table.varchar('internal_name');
        table.varchar('domain');
        table.varchar('external_id');
        table.varchar('flow_domain');
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('organizations');
};
