# Milestone Project Two - Testing

The live site can be viewed here - [Visit JQ](https://mitchdavenport88.github.io/VisitJQ/).

[Back to README file.](README.md)

## Testing
My code has been put through the following:
* [CSS AutoPrefixer.](https://autoprefixer.github.io/).
* W3C markup validation - passed.
* W3C CSS validation - passed.
* JSHint JavaScript validation:
    * map.js:
        * Reports two unused variables. initMap() is called by the google maps script in index.html on load. The other is dropMarkers(), which is called by the onclick eventListener attached to the map buttons.
        * Reports three undefined variables. Two of these jewelleryQuarterPlaces and placeIcon are defined in database.js the other, called google is used by the map API to load. 
    * database.js - Reports two unused variables. These variables are called in map.js.
    * script.js - no issues reported.
    * sendEmail.js:
        * Reports one undefined variable. The emailjs variable is used by the EmailJS API and given as part of thier documentation to successfully send the contact form via email as expected.
        * Three warnings that user_name, user_email and message would be better written in dot notation. I've chosen to ignore these as they are used to identify the input fields by using thier name attribute and using an underscore is seen better practice in HTML.

## Functionality

## Responsiveness

## Browser Compatibility

## User Stories

## Bugs & fixes