/**
 * This example is intended to help student learn the following
 * 1. Express
 * 2. Fetch on servers
 * 3. Async / Await
 * 4. Template Engines
 */




/** BASIC EXPRESS SETUP
 * server.js
 * 1. Require Express
 * 2. Create a variable to use express
 * 3. Allow the use of static assets
 *    - examples: css, .js (client-side)
 * 4. Require the request library 
 */
const express = require("express");
const app = express();
const LOG = console.log;
const fetch = require("node-fetch");
const PORT = 8080;


app.set('view engine', 'pug');


// serve static files
app.use(express.static("public"));

//set server port to listen
let listener = app.listen(PORT || process.env.PORT);
LOG('running on port ' + listener.address().port);

/** COMPRESSION
 * 1. Provides gzip compression for the HTTP response
 * 2. Enable gzip compression for all HTTP responses
 */
//var compression = require('compression');
//app.use(compression());


// app.use('/hello', (req, res, next) => res.send('Hello World') )


/**
 * http://expressjs.com/en/starter/basic-routing.html
 * @example
 */
// const aboutFile = __dirname + "/views/index.hbs";

// const indexFile = __dirname + "/views/index.hbs";
// app
//     .get("/home", (req, res) => res.sendFile(indexFile) )
//     .get("/about", (req, res) => res.sendFile(aboutFile) )




/**
* You can also refactor your routes like this later
* @example  
  const routes = require("./routes");
  app.use("/api", routes);
*/


/**
 * asynchronous fetch json from an API and pass it into the view
 */
const get_data = async (url, templateNameString, res) => {
    try {
        console.time("Request time");
        const response = await fetch(url, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "chicken-coop.p.rapidapi.com",
                "x-rapidapi-key": "53d3f3822dmsh362f38889ffbad2p1dc003jsn5dd4e4f044a1"
            }
        });
        const json = await response.json();
        // grab the array inside data by destructuring it
        // remove the spread operator to grab the first item and so on...
        // const [...data] = json.data;
        console.log(json);
        // pass the json response into the the view
        // remember that res.render is part of EXPRESS
        res.render(templateNameString, {
            data: json,
            title: json.result.title,
            img: json.result.image,
            genres: json.result.genre,
            release: json.result.releaseDate,
            desc: json.result.description,
            publisher: json.result.publisher,
            also: json.result.alsoAvailableOn,
            pages: [
                '/Minecraft',
                '/Starbound',
                '/Subnautica',
                '/Magicka'
            ]
        });
        console.timeEnd("Request time");

        // use a ternary operator to log potential errors
        (err) => (err) ? LOG(err): LOG("all good")
    } catch (error) {
        console.log(error);
    }
};


/** PAGES / VIEWS / ROUTES
 * Your pages or routes go here
 * 1. Route for your home page
 * 2. Route for your about page
 * 3. Route for any undefined page will send a 404 error.
 * 4. Handle errors
 */
// app.get("/", (request, response) => {
//   response.render('index', {
//     exampleVariable: "Hello world"
//   });
// });

app.get("/", (req, res) => {
    // get_data("", "index", res)
    res.render("home", {
        title: "home",
        pages: [
            '/Minecraft',
            '/Starbound',
            '/Subnautica',
            '/Magicka'
        ]
    });
});


app.get("/Minecraft", (req, res) => {
    get_data("https://chicken-coop.p.rapidapi.com/games/Minecraft", "games", res)
});
app.get("/Starbound", (req, res) => {
    get_data("https://chicken-coop.p.rapidapi.com/games/Starbound", "games", res)
});
app.get("/Subnautica", (req, res) => {
    get_data("https://chicken-coop.p.rapidapi.com/games/Subnautica", "games", res)
});
app.get("/Magicka", (req, res) => {
    get_data("https://chicken-coop.p.rapidapi.com/games/Magicka", "games", res)
});


// app.use(function(req, res, next){
//   res.status(404);
//   res.type('txt').send('Not found');
// });

// app.use(function(err, req, res, next) {
//   if(err) {
//     res.status(err.status || 500)
//       .type('txt')
//       .send(err.message || 'SERVER ERROR');
//   }  
// })