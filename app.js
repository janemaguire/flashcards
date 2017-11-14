// Require express module
const express = require('express');

// This is convention
const app = express();

// Tells express which template engine to use, will ook in /views by default
app.set('view engine', 'pug');

// Home route will listen for GET requests, two parameters, path and callback function
app.get('/', (req, res) => {
    res.render('index');
});

// Cards route renders card template
app.get('/cards', (req, res) => {
    res.render('card', { prompt: 'Question 1', hint: 'Here is clue 1'});
});

// Port to serve app on, can also take a callback as a parameter
app.listen(3000, () => {
    console.log('Running on port 3000');
});
