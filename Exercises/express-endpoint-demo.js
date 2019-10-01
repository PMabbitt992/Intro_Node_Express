var express = require('express');
var app = express();
var fs = require('fs');
var port = 5000;

app.listen(port, function () {
    console.log('Server listening on localhost:%s', port);
});

app.use('/', function (req, res) {
    console.log('User requested an endpoint!');
    res.send('<h2>HOME!</h2>')
});

app.use('/message', function (req, res) {
    console.log('User requested an endpoint!');
    res.send('<h2>Hello from the server endpoint!</h2>')
});

app.use('/users', function (req, res) {
    fs.readFile('./data1.json', 'utf-8', function (err, data) {
        res.send(data);
    });
});