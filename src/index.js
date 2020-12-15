const path = require('path');
const express = require('express');
const ap = express();

console.log(__dirname);

console.log(path.join(__dirname,"../public"));

const staticPath = path.join(__dirname,"../public");

ap.use(express.static(staticPath));

ap.get("/", function(req,res){
    res.send("Hello from express");
    res.end();
});

ap.get("/about", function(req,res){
    res.send("Hello from express from about page..");
    res.end();
});

ap.listen(8080, function(){
    console.log("go to port number 8080");
});

