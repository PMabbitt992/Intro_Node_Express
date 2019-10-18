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

        res.render(templateNameString, {
            //put specific pieces of json data into variables for use in the pug
            data: json,
            title: json.result.title,
            img: json.result.image,
            genres: json.result.genre,
            release: json.result.releaseDate,
            desc: json.result.description,
            publisher: json.result.publisher,
            also: json.result.alsoAvailableOn,
            pages: [
                '/ARK',
                '/Donut-County',
                "/Don't-Starve",
                '/Fez',
                '/Magicka',
                '/Minecraft',
                '/Ori-and-the-Blind-Forest',
                '/Slime-Rancher',
                '/Starbound',
                '/Subnautica',
                '/Titan-Souls',
                '/Terraria',
                '/Tower-Unite',
                '/Undertale',
                '/Untitled-Goose-Game'

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

//Homepage render
app.get("/", (req, res) => {
    // get_data("", "index", res)
    res.render("home", {
        title: "home",
        pages: [
            '/ARK',
            '/Donut-County',
            "/Don't-Starve",
            '/Fez',
            '/Magicka',
            '/Minecraft',
            '/Ori-and-the-Blind-Forest',
            '/Slime-Rancher',
            '/Starbound',
            '/Subnautica',
            '/Titan-Souls',
            '/Terraria',
            '/Tower-Unite',
            '/Undertale',
            '/Untitled-Goose-Game'

        ]
    });
});


//for each endpoint, get the specified url data and display on the specified endpoint
app.get("/ARK", (req, res) => {
    get_data("https://chicken-coop.p.rapidapi.com/games/ARK: Survival Evolved", "games", res)
});
app.get("/Donut-County", (req, res) => {
    get_data("https://chicken-coop.p.rapidapi.com/games/Donut County", "games", res)
});
app.get("/Don't-Starve", (req, res) => {
    get_data("https://chicken-coop.p.rapidapi.com/games/Don't Starve", "games", res)
});
app.get("/Fez", (req, res) => {
    get_data("https://chicken-coop.p.rapidapi.com/games/Fez", "games", res)
});
app.get("/Magicka", (req, res) => {
    get_data("https://chicken-coop.p.rapidapi.com/games/Magicka", "games", res)
});
app.get("/Minecraft", (req, res) => {
    get_data("https://chicken-coop.p.rapidapi.com/games/Minecraft", "games", res)
});
app.get("/Ori-and-the-blind-forest", (req, res) => {
    get_data("https://chicken-coop.p.rapidapi.com/games/Ori and the Blind Forest", "games", res)
});
app.get("/Slime-Rancher", (req, res) => {
    get_data("https://chicken-coop.p.rapidapi.com/games/Slime Rancher", "games", res)
});
app.get("/Starbound", (req, res) => {
    get_data("https://chicken-coop.p.rapidapi.com/games/Starbound", "games", res)
});
app.get("/Subnautica", (req, res) => {
    get_data("https://chicken-coop.p.rapidapi.com/games/Subnautica", "games", res)
});
app.get("/Titan-Souls", (req, res) => {
    get_data("https://chicken-coop.p.rapidapi.com/games/Titan Souls", "games", res)
});
app.get("/Terraria", (req, res) => {
    get_data("https://chicken-coop.p.rapidapi.com/games/Terraria", "games", res)
});
app.get("/Tower-Unite", (req, res) => {
    get_data("https://chicken-coop.p.rapidapi.com/games/Tower Unite", "games", res)
});
app.get("/Undertale", (req, res) => {
    get_data("https://chicken-coop.p.rapidapi.com/games/Undertale", "games", res)
});
app.get("/Untitled-Goose-Game", (req, res) => {
    get_data("https://chicken-coop.p.rapidapi.com/games/Untitled Goose Game", "games", res)
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