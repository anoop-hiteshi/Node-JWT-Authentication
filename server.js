// server.js
// created by : Anoop patidar
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const user = require('./routes/user.route');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

mongoose.connect('mongodb://localhost/jwtauth');

const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/testing', function(req, res){
   res.json({
      "Tutorial": "Welcome to the Node express JWT Tutorial"
   });
}); 

 

app.use('/user', user);




app.listen(PORT, function(){
   console.log('Server is running on Port',PORT);
}); 

