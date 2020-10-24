const express = require("express");
const { request } = require("http");
const app = express();



app.get("/saludo/:nombre", function (req, res){
    let name= req.params.nombre;
    res.send(`Hola ${name}`);
});


app.get("/despedida", function (req, res){
    res.send("Agur Mundo");
})

app.listen(3000);