var express = require('express');
var bodyParser = require('body-parser');

var data = {};

express()
    .use(express.static(__dirname + '/public'))
    .use(bodyParser.json())
  .get('/api/data', function(req, res) { return res.json(data); })
  .post('/api/data', function(req, res) { return res.json(data = req.body);})
  .get('*', function(req, res) { return res.sendfile(__dirname + '/public/index.html');})
  .listen(3333);
