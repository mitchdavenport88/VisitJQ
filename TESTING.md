# Milestone Project Two - Testing

The live site can be viewed here - [Visit JQ.](https://mitchdavenport88.github.io/VisitJQ/)

[Back to README file.](README.md)

## Testing
My code has been put through the following:
* [CSS AutoPrefixer.](https://autoprefixer.github.io/)
* [W3C HTML validation](https://validator.w3.org/) - passed on second attempt.
    * On the first attempt one warning was found, this was that "The type attribute is unnecessary for JavaScript resources" refering to the `type="text/javascript"` attribute in my EmailJS script. As a result I deleted this.
* [W3C CSS validation](https://jigsaw.w3.org/css-validator/) - passed.  
* [JSHint](https://jshint.com/) JavaScript validation:
    * map.js:
        * Reports two unused variables. initMap() is called by the google maps script in index.html on load. The other is dropMarkers(), which is called by the onclick eventListener attached to the map buttons.
        * Reports three undefined variables. Two of these jewelleryQuarterPlaces and placeIcon are defined in database.js the other, called google is used by the map API to load. 
    * database.js - Reports two unused variables. These variables (jewelleryQuarterPlaces and placeIcon) are called in map.js.
    * script.js - no issues reported other then unnecessary semicolon's, all of which have been removed.
    * sendEmail.js:
        * Reports one undefined variable. The emailjs variable is used by the EmailJS API and given as part of thier documentation to successfully send the contact form via email as expected.
        * Three warnings that user_name, user_email and message would be better written in dot notation. I've chosen to ignore these as they are used to identify the input fields by using thier name attribute and using an underscore is seen better practice in HTML.

## Functionality


### Manual Testing
I posted my site in the #peer-code-review channel on Code Institutes Slack channel to get feedback from fellow students. Stefan Carter and Naoise Gaffney kindly took the time to test my front end product with no major issues being reported back. 

### Lighthouse Reports
Naoise mentioned in his feedback about doing a Lighthouse report. I had done some initial audits before submitting to the #peer-code-review but hadn't taken any action on any of the feedback. As part of my testing I decided to look further into its results and recommmendations in order to improve my site.

![Initial lighthouse report](readme-docs/screenshots/lighthouse-desktop-1.jpg)

Based on the results of the report I made the following changes:
* In order to improve the SEO I added a meta description into my header section.
* To improve the sites accessibility I added an `aria-label` attribute to all my buttons so they work better with screen readers.
* It was bought to my attention that my colour scheme did not have a sufficient contrast ratio. I was originally using a light green (#FBFAD3) on top of a medium green (#729D39) background, I thought this contrast was enough but it was only been given a rating of 2.99 where ideally we'd want a ratio above 4.5. As a result I decided to tweak my color scheme in order to improve the accessibility. I swapped the medium green (#729D39) for a darker green (#36622B), which was part of my planned colour palette to get a final ratio of 6.71. This is much improved. 

    [Before the change (contrast ratio 2.99) screenshot.](readme-docs/screenshots/amiresponsive-image.jpg)

    [After the change (contrast ratio 6.71) screenshot.](readme-docs/screenshots/amiresponsive-image-2.jpg).

* I added `loading = "lazy"` attributes to the `<img>` tags used in order to improve performance as the report recommended to "Defer offscreen images". On smaller devices the carousel only displays text. The images that are displayed on larger devices aren't used but were still being loaded and this was slowing the loading process down. I read about [lazy loading here](https://www.sitepoint.com/five-techniques-lazy-load-images-website-performance/#:~:text=%20Five%20Ways%20to%20Lazy%20Load%20Images%20for,and%20easy%20alternative%20for%20implementing%20lazy...%20More%20) and found that the `loading` attribute allows us to delay images from being loaded until they're required. This removed the warning.
* To add some security to my site I added `rel="noreferrer"` to all links that use `target="_blank"` [as shown here.](https://web.dev/external-anchors-use-rel-noopener/?utm_source=lighthouse&utm_medium=devtools) This attribute prevents two things:
    * Prevents the new page from being able to access the window.opener property as "noreferrer" runs in a separate process.
    * It also prevents the referer header from being sent to the new page.
    
This shows the impact of these changes:

![Lighthouse report after changes.](readme-docs/screenshots/lighthouse-desktop-2.jpg)

## Responsiveness

## Browser Compatibility

## User Stories

## Bugs & fixes