/* -----> Third Party Packages <----- */
const path = require("path");

/* -----> Access Database <----- */
const knex = require("./db/db");

/* -----> utils <----- */
const readCSV = require("./utils/readCSV")

/* -----> Create Absolute path <----- */
const contactsPath = path.join(__dirname, "./assets/contacts.csv");
console.log(contactsPath);

const customersPath = path.join(__dirname, "./assets/customers.csv");
console.log(customersPath);

const organizationsPath = path.join(__dirname, "./assets/organizations.csv");
console.log(organizationsPath);


const proposalsPath = path.join(__dirname, "./assets/proposals.csv");
console.log(proposalsPath)

/* -----> Read CSV Files <----- */

// Insert organizations Data
knex('organizations')
.truncate()  // Delete entire table data
.then(() => {

    readCSV(organizationsPath)
    .then((data) => {
        // console.log(data);
        return knex('organizations').insert(data);
    })
    .then(() => {
        console.log("Successfully organizations Data Inserted");
    })
    .catch((error) => console.log(error));

})

// Insert contacts Data
knex('contacts')
.truncate()  // Delete entire table data
.then(() => {

    readCSV(contactsPath)
    .then((data) => {
        // console.log(data);
        return knex('contacts').insert(data);
    })
    .then(() => {
        console.log("Successfully contacts Data Inserted");
    })
    .catch((error) => console.log(error));

})


// Insert customers Data
knex("customers")
.truncate()
.then(() => {
    readCSV(customersPath)
    .then((data) => {
    // console.log(data)
    return knex("customers").insert(data)
    })
    .then(() => {
        console.log("Successfully customers Data Inserted");
    })
    .catch(() => {
        console.log(error)
    })
})


// Insert proposals Data
knex("proposals")
.truncate()
.then(() => {
    readCSV(proposalsPath)
    .then((data) => {
        console.log(data)
        return knex("proposals").insert(data)
    })
    .then(() => {
        console.log("Successfully proposals Data Inserted");
    })
    .catch((error) => {
        console.log(error)
    })
})













/*
const organizationsResults = [];
fs.createReadStream(organizationsPath)
.pipe(csv())
.on("data", (data) => organizationsResults.push(data))
.on("end", () => console.log(organizationsResults))
.on("error", (error) => console.log("Error in Data Reading", error));
*/

