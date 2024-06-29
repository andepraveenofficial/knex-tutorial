# Knex-Setup

### Project Setup
* `npm init -y`
* `git init`
* create `.gitignore` file from Toptal Website
* Third Party Packages
    - `npm install -D nodemon` Automatic Server Restart
    - `npm install express` Server-side web framework
    - `npm install -D dotenv` Hide sensitive information
* Knex setup
    - `npm install knex`
    - `npm install mysql2`
    - `npm -g install knex`
    - `knex init` to create `knexfile.js`
    - `knex migrate:make users` to create __users__ migration file.
    - `knex migrate:latest` to create table in database
* create database on mysql

### vscode extensions
* REST Client - test the APIs 

### Start the Application
* `npm run dev`

### Folder Structure
- .env
* src
    - index.js
    * db
        - db.js
    * models
        - user.js
    * routes
        - users.js
    * rest-client
        - app.http    
- .env
- knexfile.js
- .gitignore       
- package.json
- README.md