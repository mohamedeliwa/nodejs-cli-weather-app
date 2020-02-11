const geoCode = require("./utils/geocode");
const forecast = require("./utils/forecast")

geoCode("tokyu", (error, data) => {
  console.log("Error:", error);
  console.log("data:", data);
});

forecast("-75.7088", 44.1545, (error, data) => {
  console.log('Error', error)
  console.log('Data', data)
})