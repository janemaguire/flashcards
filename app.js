// Require express module
const express = require('express');

// This is convention
const app = express();

// Home route will listen for GET requests, two parameters, path and callback function
app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1>');
});

// Hello route works same way as home
app.get('/hello', (req, res) => {
    res.send('<h1>Hello Developer</h1>')
})

// Port to serve app on, can also take a callback as a parameter
app.listen(3000, () => {
    console.log('Running on port 3000');
});
