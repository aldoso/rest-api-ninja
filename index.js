const express = require('express')
const app = express()

app.listen(process.env.PORT || 5000, function(req, respond) {
  respond.send('worrkks')
  console.log('Node app is running on port')
});
