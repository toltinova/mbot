var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ a: "Welcome to MBot" }));
});

app.get('/stats', function(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ "a":"BTC",
  "b":"ETH"}));
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

app.listen(3000);
