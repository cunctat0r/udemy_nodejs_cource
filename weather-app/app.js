const yargs = require('yargs');
const geocode = require('./geocode/geocode.js');
const forecast = require('./forecast/forecast.js');


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

var addressObject = geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    console.log(JSON.stringify(results, undefined, 2));
    return results;
  }
});

console.log(addressObject);

const latitude = 49.93572349999999;
const longitude = 36.2474285;

const address = {
  latitude,
  longitude
};

forecast.getForecast(address, (errorMessages, results) => {
  if (errorMessages) {
    console.log(errorMessages);
  } else {
    console.log(JSON.stringify(results, undefined, 2));  
  }
});

