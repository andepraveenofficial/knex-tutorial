# Knex Setup

### Step 1 : Basic NodeJS Setup
* Install NodeJS
* create `index.js`
* Write some code in `index.js`
* Start the Application : `node index.js`

### Step 2 : nodemon Setup
* __nodemon__ is third-party package to start the server automatically.
* when you save the code server will restart automatically.
* Create Node Environment : `npm init -y`
*  Install nodemon : `npm install -D nodemon`
* Start the Application : `nodemon index.js`

### step 3 : Change the Scripts
* To avoid typing `nodemon index.js` every time, you can modify the scripts section of your `package.json` file.

```json
"scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  },
```
* Start the Application : `npm run dev`

### Step 4 : ExpressJS Setup
* Install Server-side web Framework : `npm install express`
* Start the Application : `npm run dev`

### Step 5 : Check HTTP requests
* use __postman__
* We are using **REST Client** VScode extension for see the output.

### Step 6 : git Setup
* `git init`
* create `.gitignore` file from Toptal Website

### Step 7 : Setup Environmental Variables
* `npm install -D dotenv` Hide sensitive information

### Step 8 : knex setup
* `npm install knex`
* `knex init` to create `knexfile.js`
* Install Database : Development -> `npm install sqlite3` 
* migrations
   - `knex migrate:make users` to create __users__ migration file.
   - Write Schema for Table in `users migration file`
   - `knex migrate:latest` to create table in database
* seeds
   - `knex seed:make users` to create the **users** seed file.
   - Write the initial data for the table in the users seed file.
   - `knex seed:run` to populate the table with initial data.

### Add Scripts
```json 
"scripts": {
  "migrate": "knex migrate:latest",
  "seed": "knex seed:run"
}
```

### Step 9 : Production Database Setup -> mysql
* `npm install mysql2` Install the MySQL driver package
* crete database in mysql2
* Update the `knexfile.js` for Production
* Make sure your MySQL server is running and accessible with the provided credentials.
* migrations
   - `knex migrate:latest` to create table in database
* seeds
   - `knex seed:run` to populate the table with initial data.



### Installation
* `npm install`

### Start the Application
* `npm run dev`

 