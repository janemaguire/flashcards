// Require modules
const express = require('express');
const bodyParser = require('body-parser');

// This is convention
const app = express();

// Use body bodyParser and turn off extended option
app.use(bodyParser.urlencoded({ extended: false }));

// Tells express which template engine to use, will ook in /views by default
app.set('view engine', 'pug');

// Home route will listen for GET requests, two parameters, path and callback function
app.get('/', (req, res) => {
    res.render('index');
});

// Hello route get request
app.get('/hello', (req, res) => {
    res.render('hello');
});

// Hello route post request
app.post('/hello', (req, res) => {
    console.log(req.body);
    res.render('hello');
});

// Cards route renders card template
app.get('/cards', (req, res) => {
    res.render('card', { prompt: 'Question 1', hint: 'Here is a clue'});
});

// Port to serve app on, can also take a callback as a parameter
app.listen(3000, () => {
    console.log('Running on port 3000');
});
