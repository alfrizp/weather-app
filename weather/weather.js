const request = require('request');

var getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/c276c6a23271c580ce590c6be6001093/${lat},${lng}`,
        json: true
    }, (err, res, body) => {
        // console.log(res.statusCode);
        if (!err && res.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        } else {
            callback('Unable to fetch data of Forecast servers');
        }

    });
}

module.exports.getWeather = getWeather;
