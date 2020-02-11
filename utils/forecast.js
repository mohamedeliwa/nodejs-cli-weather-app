// npm package that allows us to create http requests.
const request = require("request");

const forecast = (latitude, longitude, callback) => {

    // the url of the api we are using to get the forcast, https://darksky.net/
    const url = `https://api.darksky.net/forecast/3203ccb518b4c4038e8892f6ebfd27a5/${latitude},${longitude}?units=si&lang=en`;

    request({
        url,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback("unable to connect to weather service");
        } else if (body.error) {
            callback(undefined, `Unable to find location. Server resp is: ${body.error}`)
        } else {
            callback(undefined, `${body.daily.data[0].summary} It is currently ${body.currently.temperature} degrees out, There is a ${body.currently.precipProbability}% chance of rain` )
        }
    })
}

// the url of the api we are using to get the forcast, https://darksky.net/
// const url =
//   "https://api.darksky.net/forecast/3203ccb518b4c4038e8892f6ebfd27a5/37.8267,-122.4233?units=si&lang=en";

// request(
//   {
//     url,
//     // json to true to make request parse the response body automatically.
//     json: true
//   },
//   (err, resp, body) => {
//     if (err) {
//       console.log("unable to connect to weather service");
//     } else if (body.error) {
//       console.log(`\nUnable to find location.\nServer resp is: ${body.error}`);
//     } else {
//       console.log(
//         `\n${body.daily.data[0].summary} It is currently ${body.currently.temperature} degrees out, There is a ${body.currently.precipProbability}% chance of rain`
//       );
//     }
//   }
// );
module.exports = forecast;