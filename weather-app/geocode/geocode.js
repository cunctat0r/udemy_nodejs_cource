const request = require('request');

const geocodeAddress = (address) => {

  var url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}`;

  request({
    url: url,
    json: true
  }, (error, response, body) => {
    if (error) {
      console.log('Unable to connect to Google services.');
    } else if (body.status === 'ZERO_RESULTS') {
      console.log('Unable to find address');
    } else if (body.status === 'OK'){
      console.log(body.results[0].formatted_address);
      console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
      console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
    }
  });

}
module.exports = {
  geocodeAddress
};
