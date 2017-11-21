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
app.use('/static', express.static('public'));

// Tells express which template engine to use, will ook in /views by default
app.set('view engine', 'pug');

// Import and use routes module and card routes module
const mainRoutes = require('./routes');
const cardRoutes = require('./routes/cards')
app.use(mainRoutes);
app.use('/cards', cardRoutes);

// Middleware example with errorhandling
app.use((req, res, next) => {
    console.log('one');
    const err = new Error('uh oh');
    err.status = 500;
    next();
});

// Middleware example
app.use((req, res, next) => {
    console.log('two');
    next();
});

// Handling 404 errors
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// Error handler middleware, four parameters
app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render('error');
});

// Port to serve app on, can also take a callback as a parameter
app.listen(3000, () => {
    console.log('Running on port 3000');
});
