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
These are the steps I went through testing my website and it's functionality.

Navigation:
1. Clicked all the links in the navigation to check they take me to the intended section.
2. Clicked the logo to check that this makes the page scroll back up to the home / landing page at any point.
3. Hovered over the links to check they become bold on hover.
4. Changed the window width to below 992px in order to check that the navigation bar content changes. A menu icon should be displayed to the right and all links should display via a drop down menu only. 
5. The Visit JQ logo should always be positioned top left.
6. Toggled the menu icon button on/off to check it displays and hides the dropdown menu accordingly. Links to the other sections should be shown in this dropdown menu.
7. Repeated step 1 but using the dropdown menu only.
8. Clicked all the links using the dropdown menu only to check that the menu hides once a link has been clicked.
9. Check that the navigation bar remains at the top of the page at all times and is never hidden by any other content.

Home / landing:
1. Check that the background image isn't pixelated and loads 100vh.
2. Check the text overlay box appears and that the relevant text and buttons are visible.
3. Hovered over the "Plan Your Visit" button to check it inverts colour on hover.
4. Clicked the button to check the page scrolls down to the Eat | Drink | Explore section.

Eat | Drink | Explore:
1. Checked that the title of "Eat | Drink | Explore" is displayed and aligned centrally above the section.
2. Check that on screen widths of 992px and above the carousel should display half text and half image.
3. Checked the pictures load, are positioned well and are of good quality.
4. Checked that on page load (irrelevant of page width) the arrow button should display to the right of the carousel indicating the carousel can slide this way. 
5. Clicked the arrow buttons to check they move the carousel the intended way.
6. Checked that arrow buttons get hidden on slide 1 and 4 as the move they indicate doesn’t exist. Check on slides 2 and 3 that arrows are displayed on both sides of the carousel.
7. Four indication buttons should be displayed at the bottom of the carousel. Check these indicate what slide is currently been shown. They should update in appearance dependent on the slides index.
8. Clicked on each indication button. On click the carousel should move to its corresponding slide e.g. button 2 is a link to slide 2. 
9. Should be 4 slides in total.
10. Changed the window width to below 992px to check the carousel shows text only as the images get hidden.
11. Check that the carousel adjusts to full screen width. Text is legible and doesn’t overflow. 
12. Repeat steps 4 - 9.

What to do:
1. Checked that the title of "What To Do?" is displayed and aligned centrally above the section.
2. On screen widths of 992px and above all the contents of this section should be inline filling the pages width.
3. Check that the map renders in the right place and shows the JQ.
4. Check that buttons loads above the map. Each button should have a label and icon that relates to its function.
5. Hovered over each of the map buttons to check they invert colour on hover.
6. At the same time a brief introduction and explanatory text should appear in the recommendation section (to the right of the map).
7. Clicked a map button.
    * Check that the relevant set of markers appear on the map.
    * Click a different map button. The map should clear and different set of markers should appear.
    * The map should only display one set of markers at a time as there are different sets of markers for each button.
8. Clicked on a marker.
    * Check the map zooms and centralises the marker in the map.
    * Check that an info window pops up and is attached to this marker.
    * Info window should display a title, a brief description and a website link. This should open in new tab.
    * Check that recommendation section text changes to show either additional information or a reveiw of the venue.
    * Check that in the instances where the additional information contains links, that they open in new tabs.
9. Click another marker.
    * Check that everything that existed for the previous marker has been cleared.
    * Repeat step 8.
10. Clicked the x in the info window - closes the info window but marker should remain.
11. Clicked another map button. By clicking another button the map should reset to its default position and zoom.
    * The recommendation section text also resets to its default.
12. Changed the window width to below 992px in order to check the map and its buttons fill the screen width. The recommendation section should drop underneath this.
13. Repeat steps 7-11.

Contact:
1. Checked that the title of "Contact" is displayed and aligned centrally above the section.
2. Should be 3 input fields in total: name, email and message. Each should have a relevant label.
3. Hovered over the send button to check it inverts colour on hover.
4. Pressed the send button to try and send an empty form. A red appeared and displayed the message: “Please ensure all fields are correctly filled in!” as all fields are required.
5. Filled in any 2 of the 3 fields with "test test test". Pressed the send button.  The same error message “Please ensure all fields are correctly filled in!” should appear as again all fields are required.
6. Filled in all fields with "test test test". Pressed the send button. The same error message “Please ensure all fields are correctly filled in!” appeared because the email field requires a email address.
7. As our email field needs an input value that resembles an email address. I changed the email field to "test@test" and pressed send. This would of sent if using the HTML required attribute but the message “Please ensure all fields are correctly filled in!” displayed in this case as a valid email address should have a .com or .something at the end.
8. Changed email field to "test@test.com" and pressed send. The button text should now read sending… 
9. A green box should now appear and display the message: “Your message has been sent!” The button text should now read send and the form should of been reset, blank and ready for use again if required.
10. On screen widths below 768px the form layout will change with all fields becoming block and displaying on top of one another. 

Footer:
1. Check that social links display to the right and the copyright notice displays to the left.
2. Click all social links in the footer to check they open in a new tab.

I also posted my site in the #peer-code-review channel on Code Institutes Slack channel to get feedback from fellow students. Stefan Carter and Naoise Gaffney kindly took the time to test my front end product with no major issues being reported back. 

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
* To improve the security of my site I added `rel="noreferrer"` to all links that use `target="_blank"` [as shown here.](https://web.dev/external-anchors-use-rel-noopener/?utm_source=lighthouse&utm_medium=devtools) This attribute prevents two things:
    * Prevents the new page from being able to access the window.opener property as "noreferrer" runs in a separate process.
    * It also prevents the referer header from being sent to the new page.
    
This shows the impact of these changes:

![Lighthouse report after changes.](readme-docs/screenshots/lighthouse-desktop-2.jpg)

## Responsiveness
Whilst building my site I have been checking my progress and changes using Chrome DevTools at different breakpoints. I also make a habit of regularly pushing my work to GitHub, so I can pshyically see the live site on both my desktop and iPhone via GitHub pages. I do this at varying stages of the build and especially when new features get added as I find physically seeing something more beneficial than a projection on Devtools. This also gives me a better feel of how it'll work.

I have tested for responsiveness on other devices using DevTools along with the Responsive Design Mode on Firefox and the Inspect tool on Microsoft Edge. Using these tools I have tested on numerous mobile devices such as the Moto G4, Galaxy X9 and the iPhone range as well as numerous tablet devices in both landscape and portrait views.

## Browser Compatibility
I have physically tested my website by completing the manual testing plan on the following browsers and devices:
* Chrome (desktop and iPhone).
* Firefox (desktop and iPhone).
* Safari (desktop and iPhone).
* Microsoft Edge (desktop only).
 
I also tested compatibility at varying screen sizes to test the responsiveness on each Browser using Chrome DevTools along with the Responsive Design Mode on Firefox or the Inspect tool on Microsoft Edge. Issues that occured during this testing are documented in the bugs & fixes section.

## User Stories

## Bugs & fixes