const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found.',
    name: 'Todo App v1.0'
  });
});

app.get('/users', (req, res) => {
  res.send([{
    name: 'John',
    age: 24
  }, 
  {
    name: 'Jane',
    age: 22
  }, 
  {
    name: 'Mike',
    age: 32
  }]);
});

app.listen(3000);
module.exports.app = app;
