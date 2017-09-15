const request = require('request');
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

var addressUri = encodeURIComponent(argv.a);

request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${addressUri}`,
    json: true
}, (err, res, body) => {
    console.log(`Alamat : ${body.results[0].formatted_address}`);
    console.log(`Latitude : ${body.results[0].geometry.location.lat}`);
    console.log(`Longitude : ${body.results[0].geometry.location.lng}`);
})
