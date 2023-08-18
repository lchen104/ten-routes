// ten routes

const express = require('express');
const app = express();
const port = 5001;


app.get("/", (req, res) => {
    
});

  
app.get("/:numBottle", (req, res) => {

});


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});