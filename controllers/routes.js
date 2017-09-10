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
    res.render('index', {burger_data});
  })
})

router.put('/burgers/update', function(req,res){
  burger.update(req.body.burger_id, function(result){
    console.log(result);
    res.redirect('/');
  })
})

router.post('/burgers/create', function(req,res){
  burger.create(req.body.burger_name, function(result){
    console.log(result);
    res.redirect('/');
  })
})

router.delete("/", function(req, res) {
  burgers.delete(condition, function() {
    res.redirect("/");
  });
});

//and export the router at the end of your file.
module.exports = router;
//
