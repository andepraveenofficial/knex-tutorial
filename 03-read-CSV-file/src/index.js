/* -----> Third Party Packages <----- */
const path = require('path');
const fs = require('fs'); // File System
const csv = require('csv-parser');  // convert CSV into JSON

const organizationsPath = path.join(__dirname, './assets/organizations.csv');
console.log(organizationsPath);  // E:\Ande Praveen\Skills\Knex\03-read-CSV-file\src\assets\organizations.csv


const results = [];
fs.createReadStream(organizationsPath)
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    console.log(results)
  })
  .on('error', (error) => {
    console.log("Error in Read file", error);
  });


/*
const readCSV = (filePath) => {
    return new Promise((resolve, reject) => {
      const results = [];
      fs.createReadStream(filePath)  // Create a readable stream from the file
        .pipe(csv())  // Pipe the stream through the CSV parser
        .on('data', (data) => results.push(data))  // Handle each chunk of data
        .on('end', () => {
          resolve(results);  // Resolve the promise when the stream ends
        })
        .on('error', (error) => {
          reject(error);  // Reject the promise if an error occurs
        });
    });
  };
*/ 


