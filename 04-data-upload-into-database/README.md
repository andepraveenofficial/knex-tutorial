# Data Upload into Database

### Setup
* `npm init -y`
* `npm install -D nodemon`  Automatic Server Restart
* `npm install csv-parser` parse the CSV data into structured JavaScript objects.
* Knex setup
* create database on mysql -> knex_db1
    - `npm install knex`
    - `npm install mysql2`
    - `knex init` to create `knexfile.js`
    - `knex migrate:make users` to create __users__ migration file.
    - `knex migrate:latest` to create table schema in database / modify the table schema

### Start the Application
* `npm run dev`

### Folder Structure
- README.md
* assets
    - contacts.csv
    - customers.csv
    - organizations.csv
    - proposals.csv
* src
    - index.js
* utils
    - readCSV.js


### Theory

#### migrations (create Table Schema)

```js 
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
```

#### up Function
Purpose: The up function is responsible for defining the actions to be performed when migrating the database schema forward, typically applying a new migration.

Usage: Inside the up function, you specify the changes you want to make to the database schema. This may include creating new tables, adding columns, modifying existing tables, or any other schema alterations necessary for the migration.

Example: If you're creating a new table in a migration, you would define the table schema and use Knex methods like knex.schema.createTable() inside the up function to execute the necessary SQL commands to create the table.

#### down Function
Purpose: The down function is responsible for defining the actions to be performed when rolling back a migration, effectively reverting the changes made by the corresponding up function.

Usage: Inside the down function, you specify the actions needed to undo the changes made by the up function. This typically involves dropping tables, removing columns, or undoing any schema modifications introduced by the up function.

Example: If you created a new table in the up function, you would define the necessary steps to drop that table in the down function using Knex methods like knex.schema.dropTable().