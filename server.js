// Dependencies
var express = require("express");
var parth = require('path');
var PORT = process.env.PORT || 8081;
var app = express();
var exphbs = require("express-handlebars");


// Parse request body as JSON
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true })); // allow you to read the info from your client
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" })); 
app.set("view engine", "handlebars");

app.get("/", function(req, res) {
    connection.query("SELECT * FROM burgers;", function(err, data) {
      if (err) throw err;
  
      res.render("index", { burgers: burger_name });
    });
  });
  
//   // Post route -> back to home
//   app.post("/", function(req, res) {

//     connection.query("INSERT INTO burgers (burger) VALUES (?)", [req.body.task], function(err, result) {
//       if (err) throw err;
  
//       res.redirect("/");
//     });
//   });


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
  