const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const mysql = require("mysql");
require("dotenv").config();
var exphbs = require("express-handlebars");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

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
  // connects to database
  connection.connect( (err) => {
    if (err) throw err;

  });

app.get("*", (req,res) => {
    connection.query("SELECT * FROM burger;", (err, data) => {
        if (err) throw err;

        let unEaten = data.filter(burger => !burger.is_eaten);
        let eaten = data.filter(burger => burger.is_eaten);
        res.render("index", { unEaten: unEaten, eaten: eaten });
    });
});


// starts the server
app.listen(PORT, () => {
    console.log("App listening on PORT: " + PORT);
  });