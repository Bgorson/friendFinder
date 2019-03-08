var express = require('express')
var bodyParser = require('body-parser')
var path = require("path");
var app = express()
var port = process.env.PORT || 8080



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}))

// parse application/json
app.use(bodyParser.json())

require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);



app.listen(port, function() {
  console.log("App listening on PORT: " + port)
});


/*pending functionality: 
When a user submits their info- need to compare it against
 the other users to find a match.
 Once a match is found-
 Display a modul with the best match

*/