const request = require('request');
const yargs = require('yargs');

// 68 Studencheskaya street Engels

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for.',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

var url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(argv.address)}`;

request({
  url: url,
  json: true
}, (error, response, body) => {
  if (error) {
    console.log('Unable to connect to Google services.');
  } else if (body.status === 'ZERO_RESULTS') {
    console.log('Unable to find address');
  } else {
    console.log(body.results[0].formatted_address);
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
    console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
  }
});
