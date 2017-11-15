const express = require('express');
const router = express.Router();

// Cards route renders card template
router.get('/', (req, res) => {
    res.render('card', { prompt: 'Question 1', hint: 'Here is a clue'});
});

// Export module
module.exports = router;
