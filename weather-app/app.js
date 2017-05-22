const request = require('request');

request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=68%20Oktyabrskaya%20street%20Kvasnikovka',
  json: true
}, (error, response, body) => {
  console.log(JSON.stringify(body, undefined, 2));
});
