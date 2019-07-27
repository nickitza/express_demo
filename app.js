var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send("Hi there!");
})

app.get('/bye', function(req, res){
  res.send("Goodbye!")
})

app.get('/dog', function(req, res){
  res.send("Woof Woof!")
})
app.get('/dog/:dogname', function(req, res){
  var dogname = req.params.dogname
  res.send("Hi! My name is " + dogname.toUpperCase() + "!")
})

app.get('*', function(req, res){
  res.send("This page doesn't exist. Yet. Check back soon!")
})

var port = process.env.PORT || 3000;
app.listen(port, function() { 
  console.log("Server started! <3 ")
})