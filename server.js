//dependencies
var express = require("express");
var hbs = require("express-handlebars");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var PORT = 3000;

var app = express();
app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({
  extended: false
}))

app.use(methodOverride("_method"));
app.engine("handlebars", hbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

var routes = require('./controllers/burger_controller.js');
app.use('/', routes);

app.listen(PORT, function() {
  console.log("App listening on http://localhost:%s " , PORT);
});
