var http = require('http');
var utils = require('./utils');
var port = process.env.PORT || 5000;
var express = require('express');
var app = express();

app.use(express.static('.'));
app.listen(port, () => {
    utils.print('Listening to port:', port);
});