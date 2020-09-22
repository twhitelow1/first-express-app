const express = require('express')
const router = express.Router();
const { data } = require('../data/flashcardData.json')
const { cards } = data;

router.get('/', (req, res) => {
  const numberOfCards = cards.length;
  const flashcardId = Math.floor(Math.random() * numberOfCards);
  res.redirect(`/cards/${flashcardId}`)
});

router.get('/:id', (req, res) => {
  const { side } = req.query;
  const { id } = req.params;

  if (!side) {
    return res.redirect(`/cards/${id}?side=question`);
  }
  const name = req.cookies.username;
  const text = cards[id][side];
  const { hint } = cards[id];
  const sideToShow = (side === 'question' ? 'answer' : 'question')
  const templateData = { text, id, sideToShow, name, side };
  templateData.linkText = (side === 'question' ? 'Answer' : 'Question')
  templateData.hint = hint;

  res.render('card', templateData);
});

module.exports = router;