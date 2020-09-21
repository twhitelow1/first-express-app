// Setup App
const express = require('express');
const app = express();
// Middleware
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')

//Use bodyparser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.set('view engine', 'pug');



app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  res.render('error', err);
});

app.listen(3000, () => {
  console.log('The application is running on locahost:3000!')
});