const express=require("express");
const app=express();

const aleatorio=require("./aleatorio");
const array=require("./array");



app.get("/", function(req, res) {

    array[aleatorio()]+=1;
    res.send(array);
})




app.listen(3000);


