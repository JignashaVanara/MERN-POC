require('dotenv').config();
var express = require('express');
var userRoutes = require('./api-routes/users');
const mongoose = require("mongoose");
const bodyParser = require('body-parser')
var apiRoutes = require('./api-routes/users')
var app = express();

mongoose.connect(process.env.MongoDB_URI);

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB Connected Successfully!");
})

// var MongoClient = require('mongodb').MongoClient;
// const client = new MongoClient(process.env.MongoDB_URI);
// client.connect()
//     .then(() => console.log('Connected Successfully'))
//     .catch(error => console.log('Failed to connect', error))

app.use('/api',apiRoutes);

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
})) 

//CORS middleware
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    next();
});

app.use('/api/user', userRoutes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    // res.redirect('/error').status(404);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;