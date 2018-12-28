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
const formidable = require('formidable');
const responseTime = require('response-time');
const fs = require('fs');
const port = 3000;
const path = require('path');

//View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.get('/',(req, res)=>{
  res.render("index");
});

//Static Files
app.set(express.static(path.join(__dirname,'static')));

app.listen(port , ()=>{
	console.log("Hello World");
});



