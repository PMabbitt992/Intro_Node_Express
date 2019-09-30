var express = require('express');
var app = express();
var port = 8080;

app.listen(port, function () {
    console.log('Server listening on localhost:%s', port);
});

app.use('/message', function (req, res) {
    console.log('User requested an endpoint!');
});