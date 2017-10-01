const express = require('express')
const app = express()

app.listen(process.env.PORT || 5000, function() {
  console.log('Node app is running on port')
});


app.get('/', function(req, res){
  res.send('WWWorks')
})
