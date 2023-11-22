require('dotenv').config();
var express = require('express');
const bodyParser = require('body-parser')
var apiRoutes = require('./api-routes/users')
var app = express();

// var MongoClient = require('mongodb').MongoClient;
// const client = new MongoClient(process.env.MongoDB_URI);
// client.connect()
//     .then(() => console.log('Connected Successfully'))
//     .catch(error => console.log('Failed to connect', error))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
})) 

//CORS middleware
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    next();
});


app.use('/api',apiRoutes);

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