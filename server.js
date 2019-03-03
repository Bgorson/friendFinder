// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var htmlRoutes= require("./app/routing/htmlRoutes.js")
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/"+ htmlRoutes[0].info.dirPath));
  });


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
    console.log(htmlRoutes[0].info["webPath"])
  });
  