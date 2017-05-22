const request = require('request');

const getForecast = (address, callback) => {
  var forecastURL = `https://api.darksky.net/forecast/6e7a8ea78956c674d441c2c4962ef95c/${address.latitude},${address.longitude}`;

  request({
    url: forecastURL,  
    json: true
  }, (error, response, body) => {
    if (error) {
      console.log('Unable to connect to forecast service.');
    } else if (response.statusCode === 400) {
      console.log('Unable to fetch weather.');
    } else if (response.statusCode === 200) {
      callback(`Temperature: ${body.currently.temperature}`);
      callback(`WindSpeed: ${body.currently.windSpeed}`);
      callback(`WindBearing: ${body.currently.windBearing}`);
    }
  });


};

module.exports = {
  getForecast
};
