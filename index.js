const express = require('express'); //requiring the express package
const app = express(); //making the app use expressjs

app.set('view engine', 'ejs') //setting the template engine to embeddedjs (ejs)

app.listen(process.env.PORT || 3000) // creating the server (works with heroku)

//Routes
app.get("/", function(req, res){
  res.send('it works')
})

//display a static file
app.get("/start", function(req, res){
  res.sendFile(__dirname + '/index.html')
})

//display dynamic page
app.get("/users/:name", function(req, res){
  res.send('You are wathing the profile of ' + req.params.name)
})
