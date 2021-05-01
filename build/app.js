"use strict";

var _process$env$PORT;

require('dotenv').config();

var express = require('express');

var path = require('path');

var cors = require('cors');

var session = require('express-session');

var _require = require("./middlewares/auth"),
    loggedIn = _require.loggedIn;

var authRoutes = require('./routes/authRoutes');

var likeRoutes = require('./routes/likeRoutes');

var app = express();
var PORT = (_process$env$PORT = process.env.PORT) != null ? _process$env$PORT : 3000; // Global middlewares

app.use(express.json());
app.use(cors());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7
  } // One week

})); // Controller routes

app.use('/api/auth', authRoutes);
app.use('/api/like', loggedIn, likeRoutes); // Serve the frontend if nothing else to do in the backend

app.use(express["static"](path.join(__dirname, '../build-ui')));
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../build-ui/index.html'));
});
app.listen(PORT, function () {
  return console.log("Listening on port " + PORT);
});