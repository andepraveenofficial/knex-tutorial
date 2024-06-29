/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('contacts', function(table) {
        table.varchar('id').primary();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.varchar('created_by');
        table.timestamp('updated_at').defaultTo(knex.fn.now());
        table.string('updated_by');
        table.varchar('org_id');
        table.varchar('email');
        table.varchar('first_name');
        table.varchar('last_name');
        table.varchar('source');
        table.varchar('deleted');
        table.varchar('is_gdpr_deleted');
        table.varchar('customer_id');
        table.varchar('role').nullable();
        table.varchar('external_id').nullable();
        // table.foreign('org_id').references('id').inTable('organizations');
        // table.foreign('customer_id').references('id').inTable('customers');
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('contacts');
};
