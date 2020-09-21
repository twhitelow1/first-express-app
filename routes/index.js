const express = require('express')
const router = express.Router();


//Gets
router.get('/', (req, res) => {
  const name = req.cookies.username;
  if (name)
    res.render('index', { name });
  else
    res.redirect('/signin');
});

router.get('/sandbox', (req, res) => {
  res.render('sandbox', { people })
})

router.get('/signin', (req, res) => {
  const name = req.cookies.username;
  if (name)
    res.redirect('/');
  else
    res.render('signin', { name: req.cookies.username });
});

router.post('/goodbye', function (req, res) {
  res.clearCookie('username');
  res.redirect('/signin');
});

//Posts
router.post('/signin', (req, res) => {
  res.cookie('username', req.body.username);
  res.redirect('/');
});

module.exports = router;