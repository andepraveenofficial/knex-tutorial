/* -----> Third Party packages <----- */
const express = require('express')  // Server-Side Web Application Framework
const dotenv = require('dotenv');
dotenv.config();  // Load environment variables

/* -----> create Express server Instance <----- */
const app = express();

/* -----> Middlewares <----- */
// Handling JSON data
app.use(express.json());


/* -----> Import Database <----- */
const db = require("./db/db.js")

/* -----> Connect database & Run the Server <----- */
async function connectDatabase() {
  try {
      await db.raw(`SELECT 1`);
      console.log('Successfully Database Connected');
  } catch (error) {
      console.error('Error in Database Connection:', error);
  }
}

connectDatabase()
.then(() => {
   /* -----> Assigning a port Number <----- */
      const port = process.env.PORT || 5000
      app.listen(port, () => {
      console.log(`app listening on port ${port}`)
   })
})
.catch((err) => console.log(err));

/* -----> Handling HTTP Request <----- */

// 00 Test
app.get('/', (req, res) => {
  console.log("Hello World!")
  res.send('Hello World!') 
})

// 01 Add Data
app.post('/users', async (request, response) => {
//  console.log(request.body);
const {name, age} = request.body;
const user = {name, age};

  try {
    const newUser = await db('users').insert(user);
    response.status(201).json(newUser);
  } catch (error) {
    response.status(400).json({ message: error.message });
  }
});


// 02 Get All Users
app.get('/users', async (request, response) => {
  try {
    const users = await db.select().table('users');
    response.json(users);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
});




