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
    console.log(results.address);
    forecast.getForecast(results, (errorMessages, results) => {
      if (errorMessages) {
        console.log(errorMessages);
      } else {
        console.log(`It's currently ${results.temperature}, but feels like ${results.apparentTemperature}`) 
      }
    });    
  }
});
