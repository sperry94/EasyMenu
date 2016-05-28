var express = require("express");
var path = require("path");

var port = 8000;

var app = express();
app.use(express.static(path.join(__dirname,"../app/dist")));
app.listen(port,function(){
    console.log("started listening on port", port);
})
