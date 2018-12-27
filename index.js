//All The Dependencies used in The Application
const express = require('express');
const app = express();
const http = require('http');
const autocorrect = require('autocorrect')();
const imageToTextDecoder = require('image-to-text');
const hostname = '127.0.0.1';
const port = 3000;
const formidable = require('formidable');


//Server for Uploading the Files
const server = http.createServer((req, res)=>{
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      res.write('File uploaded');
      res.end();
    });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
});

server.listen(port, hostname,() =>{
  console.log("Server Started");
});
