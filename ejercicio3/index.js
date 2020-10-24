const express = require("express");
const app = express();


const arrayPersona = ["bart", "lisa", "homer", "maggie", "abuelo"];

app.get("/persona", function (req, res) {
    let personajes = "";

    for (let i = 0; i < arrayPersona.length; i++) {
        personajes += `<h1>${arrayPersona[i]}</h1>`
    }

    res.send(personajes);

});


app.get("/persona/:nombre", function (req, res) {

    let nombre = req.params.nombre;

    for (let i = 0; i < arrayPersona.length; i++) {

        if (nombre === arrayPersona[i]) {
            res.send(arrayPersona[i]);
        }
    }
    res.send("error");

});


app.listen(3000);