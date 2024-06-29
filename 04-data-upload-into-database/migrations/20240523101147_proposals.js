/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('proposals', function(table) {
        table.varchar('id').primary();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.varchar('created_by');
        table.timestamp('updated_at').defaultTo(knex.fn.now());
        table.varchar('updated_by');
        table.varchar('org_id');
        table.varchar('name');
        table.varchar('description');
        table.varchar('amount');
        table.varchar('options_value');
        table.varchar('owner_id');
        table.integer('base_amount');
        table.varchar('previous_id');
        table.varchar('archived');
        table.varchar('deleted');
        table.varchar('change_ends_on');
        table.timestamp('change_starts_on');
        table.varchar('free_months');
        table.varchar('status');
        table.varchar('info');
        table.varchar('start_date');
        table.varchar('expires_at');
        table.varchar('proposal_number');
        table.varchar('term_type');
        table.varchar('custom_terms');
        table.timestamp('accepted_at');
        table.varchar('customer_id');
        table.varchar('source');
        table.varchar('proposal_type');
        table.varchar('purchase_order_number');
        table.varchar('display_status');
        table.varchar('system_generated');
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('proposals');
};
