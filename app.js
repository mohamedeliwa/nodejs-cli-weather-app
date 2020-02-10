// npm package that allows us to create http requests.
const request = require("request");

// the url of the api we are using to get the forcast, https://darksky.net/
const url =
  "https://api.darksky.net/forecast/3203ccb518b4c4038e8892f6ebfd27a5/37.8267,-122.4233?units=si&lang=en";

request(
  {
    url,
    // json to true to make request parse the response body automatically.
    json: true
  },
  (err, resp, body) => {
    if (err) {
      console.log("unable to connect to weather service");
    } else if (body.error) {
      console.log(`\nUnable to find location.\nServer resp is: ${body.error}`);
    } else {
      console.log(
        `\n${body.daily.data[0].summary} It is currently ${body.currently.temperature} degrees out, There is a ${body.currently.precipProbability}% chance of rain`
      );
    }
  }
);

// the url of the api we are using for geocoding, https://mapbox.com
const geocodingUrl =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZGlnZXYiLCJhIjoiY2s2Z2w5b28wMG5pMTNubWwwOTdlZ2cwaCJ9.8czn8-ba7sQMRqgn0E6u3w&limit=1";

request(
  {
    url: geocodingUrl,
    json: true
  },
  (err, resp, body) => {
    if (err) {
      console.log("\nCan't connect to geolocation service");
    } else if (body.features.length == 0) {
      console.log("\nUnable to find location, try again with different search term.");
    } else {
      console.log(body.features[0].place_name);
      console.log(body.features[0].center);
    }

  }
);
