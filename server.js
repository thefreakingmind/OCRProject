/* Dependencies
 * Express Web Framework
 * Image To Text Decoder
 * Formidable
 * AutoCorrect
*/
const express = require('express');
const app = express();
const http = require('http');
const autocorrect = require('autocorrect')();
const imageToTextDecoder = require('image-to-text');
const hostname = '127.0.0.1';
const port = 3000;
const formidable = require('formidable');
const responseTime = require('response-time');
const fs = require('fs');


//The Basic Server Setup on Nodejs
const server = http.createServer((req,res)=>{
  res.statusCode = 200;
  res.end("Hello World");
});


//Server Listening
server.listen(port, hostname,() =>{
  console.log("Server Started");
});
