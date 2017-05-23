const express = require('express');

var app = express();

app.get('/', (request, response) => {
  //response.send('<h1>Hello express!</h1>');
  response.send({
    name: 'Slava',
    likes: [
      'Trains',
      'Trams'
    ]
  });
});

app.get('/about', (req, res) => {
  res.send('About page');
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Error handling request'
  });
});

app.listen(3000);
