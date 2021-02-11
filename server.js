// Dependencies
var express = require("express");
var parth = require('path');
var PORT = process.env.PORT || 8081;
var app = express();
var exphbs = require("express-handlebars");

var connection = require('./config/connection')
var htmlRoutes = require('./controllers/html-routes')


// Parse request body as JSON
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true })); // allow you to read the info from your client
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" })); 
app.set("view engine", "handlebars");

app.use(htmlRoutes)


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
  