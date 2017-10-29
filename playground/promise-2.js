const request = require('request');

var geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        var encodedAddress = encodeURIComponent(address);
        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
            json: true
        }, (err, res, body) => {
            if (err) {
                reject('Unale to connect to Google Server');
            } else if (body.status === 'ZERO_RESULTS') {
                reject('Unale to find that address');
            } else if (body.status === 'OK') {
                resolve({
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                });
            }
        });
    });
};


geocodeAddress('klaten').then((res) => {
    console.log(JSON.stringify(res, undefined, 2));
}, (err) => {
    console.log(err);
})
