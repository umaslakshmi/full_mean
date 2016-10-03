var express = require('express'),
	path = require('path'),
	app = express(),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose');

app.use(express.static(path.join(__dirname, './client')));
app.use( express.static( path.join( __dirname, 'bower_components' )));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

require('./server/config/mongoose.js');

var routes = require('./server/config/routes.js');
routes(app);

app.listen(8000, function(){
	console.log('listening on port 8000');
});