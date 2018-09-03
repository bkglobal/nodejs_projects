var app = require('express')();
var fileUpload = require('express-fileupload');
var mongoose = require('mongoose');
var conf = require('./config/database');

var server = require('http').Server(app);

app.use(fileUpload());

server.listen(3000);

mongoose.connect(conf.database);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

var template = require('./template.js');
app.get('/template', template.get);

var upload = require('./upload.js');
app.post('/', upload.post);