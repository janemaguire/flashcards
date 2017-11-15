const express = require('express');
const router = express.Router();
const data = require('../data/flashcardData.json').data;
const cards = data.cards;

// Cards route renders card template, id is the route parameter
router.get('/:id', (req, res) => {
    res.render('card', {
        prompt: cards[req.params.id].question,
        hint: cards[req.params.id].hint
    });
});

// Export module
module.exports = router;
