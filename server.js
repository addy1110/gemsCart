/**
 * Created by ADDY on 05/11/16.
 */
var express = require('express');
var app = express();


app.use(express.static(__dirname + '/public'));


var port = 8081;
var server = app.listen(port, function(){
    console.log("server running at localhost:"+port+"/");
});
