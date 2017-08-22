// Inside the burgers_controller.js file, import the following:
//
// Express
var express = require("express");
// burger.js
var burger = require("../models/burger.js");
//
// Create the router for the app,
var router = express.Router();

router.get('/', function(req,res){
  burger.all(function(burger_data){
    console.log(burger_data);
    res.render('index');
  })
})

//and export the router at the end of your file.
module.exports = router;
//
