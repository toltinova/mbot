var fs = require('fs');
var express = require('express');
var cors = require('cors')
var app = express()

app.use(cors()) // Serve any requests regardless of security

var port = 3000;
var message = 'Server is running on port '+ port;

app.get('/', function(req, res) {
  configureResponse(res, 'welcome-message.json');
});

app.get('/stats', function(req, res) {
  configureResponse(res, 'stats.json');
});

app.get('/trades', function(req, res) {
  configureResponse(res, 'trades.json');
});

app.get('/stats/btc', function(req, res) {
  configureResponse(res, 'stats-btc.json');
});

app.get('/total-income', function(req, res) {
  configureResponse(res,'total-income.json')
});

function configureResponse(res, fileName) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  var data = fs.readFileSync(fileName);
  var json = JSON.parse(data);
  res.end(JSON.stringify(json).split('TIMESTAMP').join(Date.now()));
}

app.listen(port);
console.log(message)
