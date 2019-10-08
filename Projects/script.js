var express = require('express');
var app = express();
var port = 8080;
var fetch = require("node-fetch");

app.use(express.static(__dirname));

app.listen(port, function () {
    console.log('Server listening on localhost:%s', port);
});


app.get('/subnautica', function (req, res) {
    fetch("https://chicken-coop.p.rapidapi.com/games/subnautica?platform=pc", (data) => {
        var html = 'link rel="stylesheet" href="styles.css"';
        html += `p${data}`;
    })
    res.send(html);
});





//Template Engine
app.set('view engine', 'pug');
app.get('/', function (req, res) {
    res.render('index')
})