var express = require('express');
var app = express();
var fs = require('fs');
var port = 8080;
var fetch = require("node-fetch");

app.use(express.static(__dirname));

app.listen(port, function () {
    console.log('Server listening on localhost:%s', port);
});


//var input = document.getElementById('input').value;
//console.log(input);

fetch('https://pokeapi.co/api/v2/pokemon/sylveon')
    .then(response => response.json())
    .then(data => console.log(data))