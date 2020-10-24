const express = require("express");
const app = express();

let array = ["Lisa", "Bart", "Milhaouse", "Martin"];


app.get("/", function(req, res){
    res.send(array);
});

app.get("/:nombre", function (req, res) {

    array.push(req.params.nombre);
    res.send(array);
});


app.listen(3000);