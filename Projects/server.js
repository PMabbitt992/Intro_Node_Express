var express = require('express');
var app = express();
var port = 8080;
var unirest = require("unirest");


//Server up\\
app.use(express.static(__dirname));

app.listen(port, function () {
    console.log('Server listening on localhost:%s', port);
});

//Template Engine\\
app.set('view engine', 'pug');


//Unirest Request\\
var game = "minecraft"
var req = unirest("GET", 'https://chicken-coop.p.rapidapi.com/games/' + game + '');

req.query({
    "platform": "pc"
});

req.headers({
    "x-rapidapi-host": "chicken-coop.p.rapidapi.com",
    "x-rapidapi-key": "53d3f3822dmsh362f38889ffbad2p1dc003jsn5dd4e4f044a1"
});

req.end(function (res) {
    if (res.error) throw new Error(res.error);

    let info = res.body;
    app.get('/', function (req, res) {
        res.render('index', {
            data: info,
        })
    });

});