const geoCode = require("./utils/geocode");
const forecast = require("./utils/forecast");

// Getting command line arguemnts via built in nodejs "process" object.
const argv = process.argv;

// checking if the user entered a location as an argument to the command line
if (argv.length > 2) {

  // Converting argv to one string in case of the user entered multiple words as a location
  const locationArray = argv.slice(2); // To get a copy from argv array starting from item of index "2" to the end of the array. // slice is not mutable to the original array.
  const locationString = locationArray.join(" "); // Joining the location array words into one string seperatied by a space.

  geoCode(locationString, (error, data) => {
    // checking if there is error in geocode request
    if (error) {
      return console.log(error);
    }
    forecast(data.latitude, data.longitude, (error, forecastData) => {
      // checking if there is an error in the forecast request
      if (error) {
        return console.log(error);
      }
      console.log("\n" + data.location);
      console.log(forecastData);
    });
  });

} else {

  console.log("Please Provide A location!");

}
