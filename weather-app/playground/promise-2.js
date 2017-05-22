const request = require('request');

const geocodeAddress = (address) => {
  return new Promise( (resolve, reject) => {
    var url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}`;

    request({
      url: url,
      json: true
    }, (error, response, body) => {
      if (error) {
        reject('Unable to connect to Google services.');
      } else if (body.status === 'ZERO_RESULTS') {
        reject('Unable to find address');
      } else if (body.status === 'OK'){
        resolve({
          address: body.results[0].formatted_address,
          latitude: body.results[0].geometry.location.lat,
          longitude: body.results[0].geometry.location.lng
        });
      }
    });
})};

geocodeAddress('413124').then( (location) => {
  console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
  console.log(errorMessage);
});
