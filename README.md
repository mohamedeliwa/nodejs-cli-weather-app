# nodejs-cli-weather-app
A command-line weather application built using nodejs.  
It allows the user to get forecast information for a specific location.  
- The user provides the location through command line.
- Then the app takes the command line arguments and uses an API to convert them to latitude and longitude
- Then uses an other API to get the forecast information by providing it these latitiude and longitude.
- No speicifc npm packes used e.g "yargs" to parse command line arguments, instead I used nodejs built-in process object.

How to use: 

` node app.js location ` 

examples:

  ` node app.js cairo `   
  ` node app.js cairo egypt `   
  ` node app.js "cairo egypt" `   
  
All of the above examples are valid inputs.
