// Setup App
const express = require('express');
const app = express();
// -------------------------------------
// Middleware
// -------------------------------------
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')

// ----------------------------------------
// Use bodyparser
// ----------------------------------------
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/static', express.static('public'));

// ---------------------------------------
app.set('view engine', 'pug');

// ----------------------------------------
// Routing
// ----------------------------------------
const mainRoutes = require('./routes');
const cardRoutes = require('./routes/cards');

app.use(mainRoutes);
app.use('/cards', cardRoutes)

// Error Handeling
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  res.render('error', err);
});

// Start Server

app.listen(3000, () => {
  console.log('The application is running on locahost:3000!')
});