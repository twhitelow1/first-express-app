const express = require('express')
const router = express.Router();
const data = require('../data/flashcardData.json')

router.get('/', (req, res) => {
  res.render('card', { prompt: "Who is buried in Grants tomb?" });
});

module.exports = router;