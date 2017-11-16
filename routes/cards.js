const express = require('express');
const router = express.Router();
const { data } = require('../data/flashcardData.json');
const { cards } = data;

// Cards route renders card template, id is the route parameter
router.get('/:id', (req, res) => {
    const { side } = req.query;
    const { id } = req.params;

    // Redirect /cards/id to the question for that id
    if (!side) {
        return res.redirect(`/cards/${id}?side=question`);
    }

    const name = req.cookies.username;
    const text = cards[id][side];
    const { hint } = cards[id];

    const templateData = { id, text, name };

    // Only show hint on question side, switch from question to answer and back again
    if (side === 'question') {
        templateData.hint = hint;
        templateData.sideToShow = 'answer';
        templateData.sideToShowDisplay = 'Answer';
    } else if (side === 'answer') {
        templateData.sideToShow = 'question';
        templateData.sideToShowDisplay = 'Question';
    }

    res.render('card', templateData);
});

// Redirect /cards to a random card
router.get('/', (req, res) => {
    // Logic to get random cards
    const randomCard = Math.floor((Math.random() * cards.length));

    res.redirect(`/cards/${randomCard}?side=question`);

})

// Export module
module.exports = router;
