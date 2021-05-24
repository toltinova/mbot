'use strict';

const fs = require('fs');

var express = require('express');
var app = express();
var port = 3000;
var message = 'Server is running on port '+ port;


app.get('/', function(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ a: "Welcome to MBot" }));
});

app.get('/stats', function(req, res) {
  configureResponse(res, 'stats.json');
});


app.get('/stats/btc', function(req, res) {
  configureResponse(res, 'stats-btc.json');
});

app.get('/total-income', function(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ a: 1000000000 }));
});

function configureResponse(res, fileName) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  let rawdata = fs.readFileSync(fileName);
  let data = JSON.parse(rawdata);
  res.end(JSON.stringify(data));
  console.log(data);
}

app.listen(port);
console.log(message)
