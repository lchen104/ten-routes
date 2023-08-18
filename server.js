const express = require('express');
const app = express();
const port = 5001;


app.get("/computer", (req, res) => {
    res.send("<h1>Best computers</h1><p>Apple Macintosh is the best</p>");
});

app.get("/vacation", (req, res) => {
    res.send("<h1>Top Laptops</h1><p>Macbook Pro 16 inch</p>");
});

app.get("/show", (req, res) => {
    res.send("<h1>Favorite Show</h1><p>The Walking Dead</p>");
});

app.get("/food", (req, res) => {
    res.send("<h1>Favorite Food</h1><p>Taiwanese Porkchops</p>");
});

app.get("/car", (req, res) => {
    res.send("<h1>Favorite Car</h1><p>McLaren 720</p>");
});

app.get("/song", (req, res) => {
    res.send("<h1>Favorite Song</h1><p>Running by Information Society</p>");
});

app.get("/ev", (req, res) => {
    res.send("<h1>Top EV</h1><p>Tesla is the best EV</p>");
});

app.get("/amusement", (req, res) => {
    res.send("<h1>Favorite Amusement Park</h1><p>Disney Magic Kingdom is the best</p>");
});

app.get("/exercise", (req, res) => {
    res.send("<h1>Best Exercise to flaten stomach</h1><p>Doing situps has the most bennefits</p>");
});

 app.get("/pet", (req, res) => {
     res.send("<h1>Favorite Pets/h1><p>My dog Guillermo</p>");
});


app.listen(port,() => {
    console.log('listening on port' , port);
});