// const request = require('request');
// const yargs = require('yargs');
//
// const geocode = require('./geocode/geocode');
//
// const argv =  yargs
//     .options({
//         address: {
//             describe: 'Address to fetch weather for',
//             demand: true,
//             alias: 'a',
//             string: true
//         }
//     })
//     .help()
//     .alias('help', 'h')
//     .argv;
//
// geocode.geocodeAddress(argv.a, (err, results) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(JSON.stringify(results, undefined, 2));
//     }
// });
//
// // c276c6a23271c580ce590c6be6001093

const request = require('request');

request({
    url: `https://api.darksky.net/forecast/c276c6a23271c580ce590c6be6001093/-7.657893,%20110.6645683`,
    json: true
}, (err, res, body) => {
    // console.log(res.statusCode);
    if (!err && res.statusCode === 200) {
        console.log(body.currently.temperature);
    } else {
        console.log('Unable to fetch data of Forecast servers');
    }

});
