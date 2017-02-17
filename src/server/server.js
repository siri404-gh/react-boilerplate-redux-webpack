var http = require('http');
var utils = require('./utils');
var variables = require('../../variables');
var port = variables.serverVars.port;
var express = require('express');
var app = express();

// var path = require('path');

app.use(express.static(variables.dest));
app.listen(port, () => {
    utils.print('Listening to port:', port);
});

// var requestHandler = (request, response) => {
//   request.on('error', function(err) {
//     console.error(err);
//     response.statusCode = 400;
//     response.end();
//   });
//   response.on('error', function(err) {
//     console.error(err);
//   });
//   if (request.method === 'GET' && request.url === '/echo') {
//     request.pipe(response);
//   } else {
//     response.statusCode = 404;
//     response.end();
//   }
// };

// var errorHandler = (err, socket) => {
//   socket.end();
// };

// http.createServer(requestHandler)
// .on('clientError', errorHandler)
// .listen(port, () => {
//   utils.print('Listening to port:', port);
// });