// const http = require("http");
// http.createServer(function(req,res){
//     res._write("hello world");
// }).listen(3000);
// console.log("anas");

// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello, anas World!\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// var express = require('express');  
// var app = express();  
// app.get('/', function (req, res) {  
//    res.send('Welcome to JavaTpoint');  
// })  
// var server = app.listen(8000, function () {  
// var host = server.address().address  
//   var port = server.address().port  
//  console.log("Example app listening at http://%s:%s", host, port)  
// }) 




var express = require('express');  
var app = express();  
app.get('/', function (req, res) {  
   console.log("Got a GET request for the homepage");  
   res.send('Welcome to JavaTpoint!');  
})  
app.post('/', function (req, res) {  
   console.log("Got a POST request for the homepage");  
   res.send('I am Impossible! ');  
})  
app.delete('/del_student', function (req, res) {  
   console.log("Got a DELETE request for /del_student");  
   res.send('I am Deleted!');  
})  
app.get('/enrolled_student', function (req, res) {  
   console.log("Got a GET request for /enrolled_student");  
   res.send('I am an enrolled student.');  
})  
// This responds a GET request for abcd, abxcd, ab123cd, and so on  
app.get('/ab*cd', function(req, res) {     
   console.log("Got a GET request for /ab*cd");  
   res.send('Pattern Matched.');  
})  
var server = app.listen(8000, function () {  
var host = server.address().address  
  var port = server.address().port  
console.log("Example app listening at http://%s:%s", host, port)  
})  
