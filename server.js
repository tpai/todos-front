var express = require('express');
var app = express();
var http = require('http').createServer(app);
var path = require('path');
var port = process.env.PORT || 8080;

app.use(express.static(path.resolve(__dirname, 'www')));

http.listen(port);
