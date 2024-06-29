# Read CSV File

### Setup
* `npm init -y`
* `npm install -D nodemon` Automatic Server Restart
* `npm install csv-parser`

### Folder Structure
- README.md 
- package.json
* src
    - index.js
    * assets
        - contacts.csv
        - customers.csv
        - organizations.csv
        - proposals.csv


### Start The Application
* `npm run dev`

### Theory

```js
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
```

### path
```js
const organizationsPath = path.join(__dirname, './assets/organizations.csv');
console.log(organizationsPath);  // E:\Ande Praveen\Skills\Knex\03-read-CSV-file\src\assets\organizations.csv

/*
__dirname is a special variable in Node.js that always contains the absolute path of the directory where the current file located.
*/
```

### csv-parser
* CSV -> Comma Separated Values
* csv-parser can convert CSV into JSON at at rate of around 90,000 rows per second. 

### fs
fs.createReadStream is a method in the fs (File System) module in Node.js. It creates a readable stream to read data from a file.

```js 
fs.createReadStream(filePath)  // Creates a readable stream from the file specified by filePath.
```

### pipe()
In Node.js, pipe() is a method used to transfer data from one readable or writable stream to another. It's a convenient way to handle data flow between streams.

When you see `.pipe(csv())`, it's essentially saying, "Take the output of the readable stream (in this case, the file stream), and pass it to the input of the csv-parser module."

So, `.pipe(csv())` is like connecting a pipe between the file data stream and the CSV parser, allowing the data to flow from the file into the parser. This way, the csv-parser module receives the __raw CSV data__ from the file stream and processes it row by row, converting __each row into a JavaScript object__.

## on
The `.on()` method is used to listen for specific events emitted by a stream and execute a callback function when those events occur.
* data : So, whenever a new chunk of data (a new row from the CSV file) is ready to be read, the 'data' event is triggered.
* end : The 'end' event is triggered when there's no more data left to be read from the stream. It's a way for your program to know that it's done processing all the available data.
* error : The 'error' event is triggered whenever an error occurs during the execution of your code. It's a way for your program to know that something has gone awry and needs to be addressed.