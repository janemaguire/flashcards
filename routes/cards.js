const express = require('express');
const router = express.Router();
const { data } = require('../data/flashcardData.json');
const { cards } = data;

// Cards route renders card template, id is the route parameter
router.get('/:id', (req, res) => {
    const { side } = req.query;
    const { id } = req.params;
    const text = cards[id][side];
    const { hint } = cards[id];

    const templateData = { text };

    // Only show hint on question side
    if (side === 'question') {
        templateData.hint = hint;
    }

    res.render('card', templateData);
});

// Export module
module.exports = router;
