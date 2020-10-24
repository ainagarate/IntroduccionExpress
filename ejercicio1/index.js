const express = require("express");
const app = express();



app.get("/", function (req, res){
    
    res.send(`<h1>Hola Mundo</h1> <br> <h2>desde express</h2>`);
});

app.listen(3000);
