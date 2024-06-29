/* -----> Third Party Packages <----- */
const fs = require("fs"); // File System
const csv = require("csv-parser") // parse the CSV data into structured JavaScript objects.

const readCSV = (filePath) => {
    return new Promise((resolve, reject) => {
      const results = [];
      fs.createReadStream(filePath)  // Create a readable stream from the file
        .pipe(csv())  // covert raw data into js objects.
        .on('data', (data) => results.push(data))  // Handle each chunk of data
        .on('end', () => {
          resolve(results);  // Resolve the promise when the stream ends
        })
        .on('error', (error) => {
          reject("Error i File Read", error);  // Reject the promise if an error occurs
        });
    });
  };

  module.exports = readCSV
