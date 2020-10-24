const express = require("express");
const app = express();

const persona = {
    nombre: "Lisa",
    apellido: "Simpson",
    edad: "8",
};



app.get("/nombre/:nombre", function (req, res) {

    persona.nombre = req.params.nombre;
    res.send(persona);
});


app.get("/apellido/:apellido", function (req, res) {

    persona.apellido = req.params.apellido;
    res.send(persona);
});

app.get("/edad/:edad", function (req, res) {

    persona.edad = parseInt(req.params.edad);
    res.send(persona);
});




app.listen(3000);