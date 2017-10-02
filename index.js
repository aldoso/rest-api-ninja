const express = require('express')

//set up express app
const app = express()

//listen for requests
app.listen(process.env.PORT || 5000, function(){
  console.log('This app is live on http://localhost:5000')
})


app.get("/", function(req, res){
  res.send('it works now')
})
