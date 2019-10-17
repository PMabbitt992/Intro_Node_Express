//Obsolete
// var express = require('express');
// var app = express();
// var port = 8080;
// var unirest = require("unirest");
// var path = require('path');

// //Server up\\
// app.use(express.static(__dirname));

// app.listen(port, function () {
//     console.log('Server listening on localhost:%s', port);
// });

// //Template Engine\\
// app.set('view engine', 'pug');
// app.set("views", path.join(__dirname, "views"));



// app.get('/', function (req, res) {

// });

// app.get('/Minecraft', (req, res) => {

//     //Unirest Request\\
//     var req = unirest("GET", 'https://chicken-coop.p.rapidapi.com/games/Minecraft');


//     req.query({
//         "platform": "pc"
//     });

//     req.headers({
//         "x-rapidapi-host": "chicken-coop.p.rapidapi.com",
//         "x-rapidapi-key": "53d3f3822dmsh362f38889ffbad2p1dc003jsn5dd4e4f044a1"
//     });

//     req.end(function (res) {
//         if (res.error) throw new Error(res.error);

//         let info = res.body;
//         app.get('/', function (req, res) {
//             res.render('index', {
//                 data: info,
//                 img: info.result.image,
//             })
//         });
//         console.log(info);
//         var html = 'input(type="button", onclick="location.href="http://localhost:8080/ARK", value="ARK")'
//         html += 'input(type="button", onclick="location.href="http://localhost:8080/Minecraft", value="Minecraft")'
//         html += 'input(type="button", onclick="location.href="http://localhost:8080/Subnautica", value="Subnautica")'
//         html += 'input(type="button", onclick="location.href="http://localhost:8080/Starbound", value="Starbound")'
//         html += 'input(type="button", onclick="location.href="http://localhost:8080/UGG", value="Untitled Goose Game")'
//         html += `img(src = ${info.result.image}, alt = 'Minecraft Logo')`;
//         html += `p=${info.result.title}`;
//         html += `p=${info.result.publisher}`;
//         html += `p=${info.result.releaseDate}`;
//         html += `p=${info.result.description}`;
//         html += `p=${info.result.genre}`;
//         html += `p=${info.result.alsoAvailableOn}`;
//         console.log(html);
//         res.send(html);
//     });
// });