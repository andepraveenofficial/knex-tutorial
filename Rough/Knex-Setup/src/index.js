/* -----> Third Party Packages <----- */
const express = require('express')
const dotenv = require('dotenv');
dotenv.config();  // Load environment variables

/* -----> Import Database <----- */
const db = require("./db/db")

/* -----> Import Routes <----- */
const usersRouter = require('./routes/users');


/* -----> creating Express server Instance <----- */
const app = express();

/* -----> Middlewares <----- */
app.use(express.json());

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
    const port = process.env.PORT || 5000
    app.listen(port, () => {
        console.log(`app listening on port ${port}`)
      })
})
.catch((err) => console.log(err));

/* -----> Handling HTTP Requests <----- */

// 00 Test
app.get("/", async (req, res) => {
    console.log("Testing HTTP Request ");
    res.send("Testing HTTP Request");
});


// Routes
app.use('/users', usersRouter);