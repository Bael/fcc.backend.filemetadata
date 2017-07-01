var express = require('express')
var multer  = require('multer')
var upload = multer();
var path = require('path');
var app = express()

app.use(express.static(path.join(__dirname, "/static")));


app.post('/api/upload', upload.any(), function (req, res, next) {
  //console.log(req);
  //console.log("filesize = "+req.files[0].size);
  const files = req.files || [];
  if (files.length === 0) {
  	res.send({"error":"No file supplied"});
  	res.end;
  }
  else{
  	const file = files[0];
  	res.send({size:file.size});
  	res.end();
  }
});

const port = process.env.PORT || 3000;

app.listen(port, function(err) {
	if (err) {return console.log(err)};
  
	console.log("listening port " + port + " on "+new Date().toString());
})