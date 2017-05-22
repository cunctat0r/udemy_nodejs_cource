const request = require('request');

const getForecast = (address, callback) => {
  var forecastURL = `https://api.darksky.net/forecast/6e7a8ea78956c674d441c2c4962ef95c/${address.latitude},${address.longitude}?units=si`;

  request({
    url: forecastURL,  
    json: true
  }, (error, response, body) => {
    if (error) {
      callback('Unable to connect to forecast service.');
    } else if (response.body === 'Not Found\n') {
      callback('Unable to fetch weather.');
    } else if (response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    }
  });


};

module.exports = {
  getForecast
};
