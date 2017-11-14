// Require modules
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// This is convention
const app = express();

// Use body bodyParser and turn off extended option
app.use(bodyParser.urlencoded({ extended: false }));

// Use cookie parser
app.use(cookieParser());

// Tells express which template engine to use, will ook in /views by default
app.set('view engine', 'pug');

// Home route will listen for GET requests, two parameters, path and callback function
app.get('/', (req, res) => {
    const name = req.cookies.username;
    if (name) {
        res.render('index', { name });
    } else {
        res.redirect('hello');
    }

});

// Hello route get request, get username from cookie
app.get('/hello', (req, res) => {
    const name = req.cookies.username;
    if (name) {
        res.redirect('/');
    } else {
        res.render('hello');
    }
});

// Hello route post request, set username to cookie
app.post('/hello', (req, res) => {
    res.cookie('username', req.body.username);
    res.redirect('/');
});

// Cards route renders card template
app.get('/cards', (req, res) => {
    res.render('card', { prompt: 'Question 1', hint: 'Here is a clue'});
});

// Port to serve app on, can also take a callback as a parameter
app.listen(3000, () => {
    console.log('Running on port 3000');
});
