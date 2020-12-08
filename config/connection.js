// this requires the node module mysql to work
const mysql = require("mysql");
// this is the dotenv module that protects user information from being displayed
require("dotenv").config();
const connection = mysql.createConnection({
    host: "localhost",
  
    // Port is defined in .env file
    port: process.env.DB_PORT,
  
    // Your username (defined in .env file)
    user: process.env.DB_USER,
  
    // Your password (defined in .env file)
    password: process.env.DB_PASSWORD,
    // You will need to create the db and add it here or in a .env file
    database: process.env.DB_DB
});

connection.connect(err => {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});


module.exports = connection;