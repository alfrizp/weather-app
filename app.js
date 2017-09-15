const request = require('request');
const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv =  yargs
    .options({
        address: {
            describe: 'Address to fetch weather for',
            demand: true,
            alias: 'a',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

geocode.geocodeAddress(argv.a, (err, results) => {
    if (err) {
        console.log(err);
    } else {
        console.log(results.address);
        weather.getWeather(results.latitude, results.longitude, (err, results) => {
            console.log(`It's ${results.temperature} and it feels like ${results.apparentTemperature}`);
        });
    }
});
