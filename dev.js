'use strict';

const express        = require('express');
const app            = express();
const path           = require('path');

app.use('/client', express.static(path.join(__dirname, '/client')));

app.get('/url-graph', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/punch-dates', function(req, res){
  res.sendFile(__dirname + '/visualization/punch-dates.html');
});

const server = require('http').Server(app);
server.listen(3000, function(){
  console.log('listening on *:3000');
});
