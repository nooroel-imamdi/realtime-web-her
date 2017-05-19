// Packages
var express = require('express');
var path = require('path');
var dotenv = require('dotenv');
var bodyParser = require('body-parser');
var socketio = require('socket.io');
var ngrok = require('ngrok');
var twitter = require('twitter');

// Config
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
dotenv.config();

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

// Set Static Path
app.use(express.static(path.join(__dirname, './public')));

// Bodyparser for handling form
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

connection = [];

// Twitter API
var client = new twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

// Router
app.get('/', function(req, res){
  res.render('index.ejs');
});

io.on('connection', function(data){
  console.log("connection");
})

// Run Server
server.listen(process.env.PORT || 3000);
console.log('server running... port 3000');
