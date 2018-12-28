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
const bodyParser = require('body-parser');


//View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));



app.get('/',(req, res)=>{
  res.render("index", 
	{
	  Title:'Customer',
	});
});

//Static Files
app.set(express.static(path.join(__dirname,'static')));

app.listen(port , ()=>{
	console.log("Hello World");
});



