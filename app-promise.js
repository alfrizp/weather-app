const axios = require('axios');
const yargs = require('yargs');

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

var encodedAddress = encodeURIComponent(argv.a);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(geocodeUrl).then((res) => {
    var lat = res.data.results[0].geometry.location.lat;
    var lng = res.data.results[0].geometry.location.lng;
    var weatherUrl = `https://api.darksky.net/forecast/c276c6a23271c580ce590c6be6001093/${lat},${lng}`;
    console.log(weatherUrl);
    console.log(res.data.results[0].formatted_address);
    return axios.get(weatherUrl);
}).then((res) => {
    var tempC = (res.data.currently.temperature - 32) / 9 * 5;
    var apparentTempC = (res.data.currently.apparentTemperature - 32) / 9 * 5;
    console.log(`It's currently ${tempC}. And it feels like ${apparentTempC}.`);
}).catch((e) => {
    if (e.code === 'ENOTFOUND') {
        console.log('Unale to connect to API server');
    } else {
        console.log(e.message);
    }
})
