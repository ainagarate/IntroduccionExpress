const express=require("express");
const app=express();


const array=require("../ejercicio7/array");
const aleatorio=require("..ejercicio7/aleatorio");

app.get("/", function(req, res) {

    array[aleatorio()]+=1;
    res.send(array);
})


app.get("/borrar/:numero", function(req, res){
 let numero= parseInt(req.params.numero);

for (let i=0; i<array.length; i++){
    if(numero===array[i]){
       
        array[i]=0;

    }
}

res.send(array);

});

app.listen(3000);