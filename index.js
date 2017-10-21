const express = require('express')
const bodyParser = require('body-parser') // in order to work, it needs to be before routes
const mongoose = require('mongoose')
const routes = require('./routes/api')

//set up express app
const app = express()

//connect to mongodb
mongoose.connect('mongodb://localhost/ninjago')
mongoose.Promise = global.Promise

app.use(bodyParser.json()) //must be before routes

app.use(express.static('public')) //serve static files (middleware)

//initialize routes
app.use('/api', routes)
// or same thing: app.use('/api', require('./routes/api')) but delete const routes from top

// error handling middleware
app.use(function(err, req, res, next){
  // console.log(err)
  res.status(422).send({error: err.message})
})

//listen for requests
app.listen(process.env.PORT || 5000, function(){
  console.log('This app is live on http://localhost:5000')
})

//
// app.get("/", function(req, res){
//   res.send('it works now')
// })
