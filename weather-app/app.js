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

console.log(argv);

request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=68%20Studencheskaya%20street%20Engels',
  json: true
}, (error, response, body) => {
  console.log(body.results[0].formatted_address);
  console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
  console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
});
