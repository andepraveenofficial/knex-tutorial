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
        table.varchar('previous_id').nullable();
        table.varchar('archived');
        table.varchar('deleted');
        table.varchar('change_ends_on');
        table.timestamp('change_starts_on').nullable();
        table.integer('free_months').nullable();
        table.varchar('status');
        table.text('info').nullable();
        table.date('start_date').nullable();
        table.date('expires_at');
        table.varchar('proposal_number');
        table.varchar('term_type');
        table.varchar('custom_terms').nullable();
        table.timestamp('accepted_at').nullable();
        table.varchar('customer_id');
        table.varchar('source').nullable();
        table.varchar('proposal_type');
        table.varchar('purchase_order_number').nullable();
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
