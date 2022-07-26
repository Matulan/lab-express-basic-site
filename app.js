const express = require('express');

const app = express();

app.use(express.static('public'));

// Routes

//GET Route - expecting GET request
app.get('/home', (req, res, next) => {
  res.sendFile(__dirname + '/public/views/home.html');
});

app.get('/about', (req, res, next) => {
    console.log(req);
    res.sendFile(__dirname + '/public/views/about.html');
  });

app.get('/works', (req, res, next) => {
  console.log(req);
  res.sendFile(__dirname + '/public/views/works.html');
});

app.listen(3000, () => {
  console.log('Running on port 3000');
});