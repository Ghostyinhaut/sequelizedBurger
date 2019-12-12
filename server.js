var express = require("express");

//var path=require("path");

var PORT =process.env.PORT || 8080;


var app =express();

app.use(express.static(__dirname+"../public"));

app.use(express.urlencoded({extended: true}));

app.use(express.json());

//create handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//import routes and give the server access to them
var routes = require("./controllers/burgers_controllers");

app.use(routes);

var db = require("./models");

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

  

