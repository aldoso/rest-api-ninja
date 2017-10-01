const express = require('express');
const app = express();

app.get("/", function(req, res){
  res.send('it works')
})

app.get("/start", function(req, res){
  res.sendFile(__dirname + '/index.html')
})

app.get("/profile/:name", function(req, res){
  res.send('You are wathing the profile of ' + req.params.name)
})

app.listen(process.env.PORT || 3000)
