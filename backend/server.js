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
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  let rawdata = fs.readFileSync('stats.json');
  let stats = JSON.parse(rawdata);
  res.end(JSON.stringify(stats));
  console.log(stats);
});


app.get('/stats/btc', function(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ "a": "BTC" }));
});

app.get('/total-income', function(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ a: 1000000000 }));
});

app.listen(port);
console.log(message)
