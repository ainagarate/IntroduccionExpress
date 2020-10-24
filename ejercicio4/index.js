const express = require("express");
const app = express();
const saludarenExpress= require("./saludarEnExpress");



app.get("/saludar", function (req, res){

    res.send(saludarenExpress())
})


app.listen(3000);