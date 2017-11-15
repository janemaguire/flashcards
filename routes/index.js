const express = require('express');
const router = express.Router();

// Home route will listen for GET requests, two parameters, path and callback function
router.get('/', (req, res) => {
    const name = req.cookies.username;
    if (name) {
        res.render('index', { name });
    } else {
        res.redirect('hello');
    }
});

// Hello route get request, get username from cookie
router.get('/hello', (req, res) => {
    const name = req.cookies.username;
    if (name) {
        res.redirect('/');
    } else {
        res.render('hello');
    }
});

// Hello route post request, set username to cookie
router.post('/hello', (req, res) => {
    res.cookie('username', req.body.username);
    res.redirect('/');
});

// Goodbye route
router.post('/goodbye', (req, res) => {
    res.clearCookie('username');
    res.redirect('hello');
});

// Export module
module.exports = router;
