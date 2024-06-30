## Knex,Nodejs,Typescript,mysql2 Setup

#### Project Structure
* project 
 - dist
 - src 
    - migrations .ts files
    - seeds .ts files
    - db.ts 
    - index.ts
    - knexfile.ts 
 - .env file 
 - knexfile.js 
 - package.json
 - tsconfig.json
 
* dist folder creates automatically with .js files when run the `npm run build` command 

----------------

`npm init -y`
`npm i express dotenv knex mysql2`

* dependencies list : dotenv,express,knex,mysql2
* devDependencies : @types/node, @types/express,nodemon,ts-node,typescript
----------------

1) `npm i knex mysql2`
2) `npm install --save-dev typescript ts-node @types/node`
3) `tsconfig.json` file

```shell 
    {
    "compilerOptions": {
        "lib": ["es5", "es6"],
        "target": "es6",
        "module": "commonjs",
        "strict": true,
        "esModuleInterop": true,
        "outDir": "./dist",
        "rootDir": "./src"
    },
    "include": ["src/**/*", "knexfile.ts"],
    "exclude": ["node_modules"]
    }

```

4) Knex configuration: `npx knex init -x ts`  it creates `knexfile.ts` 

```shell 
    import { Knex } from 'knex';
    import path from 'path';
    import dotenv from 'dotenv';

    dotenv.config();

    // const dotenv = require('dotenv');

    dotenv.config({ path: path.resolve(__dirname, '../.env') });

    const config: { [key: string]: Knex.Config } = {
    development: {
        client: 'mysql2',
        connection: {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        },
        migrations: {
        directory: path.join(__dirname, 'migrations'),
        extension: 'js',
        },
        seeds: {
        directory: path.join(__dirname, 'seeds'),
        extension: 'js',
        },
    },
    };

    export default config;

```
5) Initialize knex in your application (`src/db.ts`) 

```shell 
    import knex from 'knex';
    import config from './knexfile';

    const environment = process.env.NODE_ENV || 'development';
    const connection = knex(config[environment]);

    export default connection;

```
6) create a migration : `npx knex migrate:make create_users_table --knexfile knexfile.ts -x ts`

7) create tables: 
```shell 
    // const Knex = require('knex');

    /**
    * @param {Knex} knex
    * @returns {Promise<void>}
    */
    exports.up = function (knex) {
    return knex.schema.createTable('users', (table) => {
        table.increments('id').primary();
        table.string('firstname').notNullable();
        table.string('lastname').notNullable();
        table.string('email').notNullable().unique();
        table.string('password').notNullable();
        table.timestamps(true, true);
    });
    };

    /**
    * @param {Knex} knex
    * @returns {Promise<void>}
    */
    exports.down = function (knex) {
    return knex.schema.dropTableIfExists('users');
    };


```

8) migration run: 
   `npx knex migrate:latest --knexfile knexfile.ts` :  It will creates a table in database

9) Query the database(`src/index.ts`)

```shell
    import db from './db';

    const main = async () => {
    try {
        await db('users').insert({ name: 'John Doe', email: 'john.doe@example.com' });

        const users = await db('users').select('*');
        console.log(users);
    } catch (err) {
        console.error(err);
    } finally {
        await db.destroy();
    }
    };

    main();

```

10) create `knexfile.js` in your projects root directory add below code 

```shell 
    const config = require('./dist/knexfile').default;

    module.exports = config;


```
11) `package.json` file 
```shell 
    {
    "scripts": {
        "build": "tsc",
        "build:knexfile": "tsc src/knexfile.ts --outDir ./dist",
        "build:migrations": "tsc src/migrations/**/*.ts --outDir ./dist/migrations",
        "migrate": "knex migrate:latest --knexfile dist/knexfile.js",
        "seed": "knex seed:run --knexfile dist/knexfile.js"
        }
    }

```

12) compile and run : 
`npm run build`
`npm run build:knexfile`

13) seeds Creations: `npx knex seed:make initial_users --knexfile src/knexfile.ts`
14) seed ts files  like this 

```shell
    import { Knex } from 'knex';

    const seed = async (knex: Knex): Promise<void> => {
    await knex('users').insert([
        {
        id: 1,
        firstname: 'Durga',
        lastname: 'yasarla',
        email: 'durga232@gmail.com',
        password: 'password123',
        },
    ]);
    };

    export default seed;

```
15) Seed file run: `npm run seed`

16) `.env` file like this 

```shell  
    DB_HOST = 127.0.0.1 
    DB_USER = root 
    DB_PASSWORD = 
    DB_NAME = cpq_project
    DB_PORT = 3306 

    NODE_ENV = development
```