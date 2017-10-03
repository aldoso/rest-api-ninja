const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes/api')

//set up express app
const app = express()

app.use(bodyParser.json()) //must be before routes

//initialize routes
app.use('/api', routes)

//listen for requests
app.listen(process.env.PORT || 5000, function(){
  console.log('This app is live on http://localhost:5000')
})

//
// app.get("/", function(req, res){
//   res.send('it works now')
// })
