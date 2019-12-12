var express = require("express");

var app = express.Router();

// Import the model (burger.js) to use its database functions.
var db = require("../models");

//create routes
app.get("/",function(req,res){
    db.burgers.findAll({}).then(function(data) {
        var hbsObject ={
            burgers: data
        }
        console.log(hbsObject);
        res.render("index",hbsObject);
    });
  
});

app.post("/",function(req,res){
    db.burgers.create({
        burger_name: req.body.name
    }).then(function(result){
        res.redirect("/");
    });
});

app.put("/:id",function(req,res){
    var condition = "id=" +req.params.id;
    console.log(condition);
    db.burgers.update({
        devoured: true
    },condition).then(function(result){
        res.redirect("/");
    });
});

//export app for server.js

module.exports =app;

