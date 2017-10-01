const express = require('express');
const app = express();
app.listen(process.env.PORT || 1234)

app.get("/", function(req, res){
  res.send('it works')
})
