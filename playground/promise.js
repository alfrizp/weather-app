var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        if (typeof a === 'number' && typeof b === 'number') {
            resolve(a + b);
        } else {
            reject('Arguments must be number');
        }
    });
};

asyncAdd(5,8).then((res) => {
    console.log('The result is ', res);
    return asyncAdd(res, 58)
}).then((res) => {
    console.log('The final result ', res);
}).catch((err) => {
    console.log(err);
});

// var somePromise = new Promise((resolve, reject) => {
//     //resolve('Hey. It worked');
//     reject('Unable to fulfill promise');
// });
//
// somePromise.then((message) => {
//     console.log('Success: ', message);
// }, (errMessage) => {
//     console.log('Error: ', errMessage);
// })
