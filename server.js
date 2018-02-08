// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static( 'public'));
app.get("/survey", function (req, res) {
  res.sendFile(path.join(__dirname, "../app/public/survey.html "));
});
require("./app/routing/htmlRoutes")(app);
// require("./app/routing/apiRoutes")(data);


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  