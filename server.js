// must install express for app to work
const express = require("express");

const PORT = process.env.PORT || 8080;

const app = express();

// makes the public folder static for styles/images/js
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// must also install handlebars for this app to work that is the key rendering module for this project
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// this module is what handles all of the api calls for the project
const routes = require("./controllers/burgerControl");

app.use(routes);

app.listen(PORT, () => {
    console.log("App now listening at localhost:" + PORT);
});