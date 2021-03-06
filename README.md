# Visit JQ

### Milestone Project Two
Visit JQ is an interactive website aimed at encouraging people to venture out of central Birmingham and discover what the Jewellery Quarter has to offer. The JQ (as locals call it) is seen as a bit of a hidden gem, located just a stone’s throw away from the hustle and bustle of the city centre with a flourishing food and drink scene. This along with the area’s industrial roots and being Birmingham’s central creative hub makes the JQ well worth a visit.

## Demo
The live site can be viewed here - [Visit JQ.](https://mitchdavenport88.github.io/VisitJQ/)

GitHub repository can be viewed here - [mitchdavenport88/visitJQ.](https://github.com/mitchdavenport88/visitJQ)

![Site Mockup](readme-docs/screenshots/amiresponsive-image-2.jpg)

## UX
### Strategy
The aim is to create a user friendly website that shows potential visitors information about the Jewellery Quarter in a clear and intuitive manner. Visit JQ will provide the user with recommendations along with any other relevant information with the intention of enticing people away from the city centre to support more local, independent businesses and the local community.

This website will be aimed at potential visitors who might be new to the area and have never visited or even thought of visiting before. It will also be of use to those visitors who may have visited before or know of the area but are looking to explore it further. Either way the users share the same end goal - they want information.

Reasons for the site:
* Aim to increase the amount of visitors by encouraging people to visit or to return.
* Provide a snapshot of the variety that the JQ has to offer - show there is something for everyone.
* Be a guide to the area, giving recommendations on where to go and what to see.
* To be informative and provide useful information.
* Promote and support local, independent businesses.
* Be a point of contact for potential visitors. This can be via social media or by a contact form on the site.

### User Stories 
As a user I'd like:
* The site to be easy to navigate around.
* To be able to find what I’m after quickly.
* To get a better understanding about the area to gauge whether it’s worth visiting.
* Recommendations of what to do, where to go and where to stay.
* Find further information on recommendations easily, so I can decide on whether they’re suitable.
* To find out where places are.
* To be able to get in touch with someone if I have any questions.
* To do all of the above regardless of what device I’m using.

As the site owner, I'd want:
* An easy to navigate, responsive site.
* A well-presented and visually appealing product that gives users the feeling that they can trust the content.
* To give people reasons to visit. I can do this by providing a wide range of options of what to do, where to go and where to stay thus catering for a wider audience.
* To show relevant information on my recommendations. This information is to be clear and informative.
* To provide useful information in a concise, intuitive manner that keeps the user engaged and likely to return.
* To be easily contactable.

### Scope - Functionality (must meet all)
* The site must be easy to navigate around.
* Present clear and concise information, which is visually appealing.
* We want the user to remain engaged throughout use so must be user-friendly.
* Function as expected:
    * Fully responsive on all devices.
    * External links must open in new windows.
    * Logo is also a link to home / landing page.

### Scope - Content (in order of priority)
* An about section that tells and shows the user what the JQ has to offer.
* Recommendations - show these in a visual and interactive way using JavaScript to create clickable features that increase engagement.
* Contact section - messages could be sent either using EmailJS or via social media channels.
* Give additional information on recommendations – websites, reviews and descriptions.
* Show a local weather forecast using a weather API as part of the about section.

### Structure
Based on the information gathered during the scope the website will require just one page, with each section filling the page horizontally and following one another vertically. The basic structure of the page will be as follows:
* Fixed navigation bar at the top with the Visit JQ logo and links to each section of the page. This will be accessible at all times.
* Body (split into four sections):
    * Home / landing page with a hero image. 
    * An about section with the tagline - Eat | Drink | Explore. 
    * What to do? This section will feature the Google Maps API and will show our recommendations of what to do and where to eat and drink. 
    * Contact section will be a contact form, which will send the message via the EmailJS API.
* Footer with social media links and a copyright notice.

### Skeleton
Initial idea - [sketch](https://github.com/mitchdavenport88/VisitJQ/blob/master/readme-docs/wireframes/wireframe-sketch.jpg).

Home wireframes - [desktop](https://github.com/mitchdavenport88/VisitJQ/blob/master/readme-docs/wireframes/home-desktop.png) | 
[tablet](https://github.com/mitchdavenport88/VisitJQ/blob/master/readme-docs/wireframes/home-tablet.png) | 
[mobile](https://github.com/mitchdavenport88/VisitJQ/blob/master/readme-docs/wireframes/home-phone.png).

About wireframes - [desktop](https://github.com/mitchdavenport88/VisitJQ/blob/master/readme-docs/wireframes/about-desktop.png) | 
[tablet](https://github.com/mitchdavenport88/VisitJQ/blob/master/readme-docs/wireframes/about-tablet.png) | 
[mobile](https://github.com/mitchdavenport88/VisitJQ/blob/master/readme-docs/wireframes/about-phone.png).

To do wireframes - [desktop](https://github.com/mitchdavenport88/VisitJQ/blob/master/readme-docs/wireframes/map-desktop.png) | 
[tablet](https://github.com/mitchdavenport88/VisitJQ/blob/master/readme-docs/wireframes/map-tablet.png) | 
[mobile](https://github.com/mitchdavenport88/VisitJQ/blob/master/readme-docs/wireframes/map-phone.png).

Contact wireframes - [desktop](https://github.com/mitchdavenport88/VisitJQ/blob/master/readme-docs/wireframes/contact-desktop.png) | 
[tablet](https://github.com/mitchdavenport88/VisitJQ/blob/master/readme-docs/wireframes/contact-tablet.png) | 
[mobile](https://github.com/mitchdavenport88/VisitJQ/blob/master/readme-docs/wireframes/contact-phone.png).

### Surface
As this is a single page design each section will fill the page horizontally and follow one another vertically as stated in the structure. This will remain the case at all responsive breakpoints. The navigation menu will be fixed at the top of the page and will house both the websites logo and links. Each section will be accessible at any point by using these links and when clicked will scroll the page up or down to the selected section.

Each section will follow a similar layout of title then content. The content will be placed on a background of block colour in order to lift the sections content off the page and add a bit of segregation whilst making it a bit more visually appealing. A footer of similar aesthetic to the navigation menu will be at the bottom of the page housing social media links (via icons) underneath the contact section. This is where a user would expect to find these.

I want the imagery used throughout to be a nod to the creativity closely associated with the area. The JQ has a strong industrial link with the manufacture of Jewellery (hence the name) so I want my hero image to echo this, which is why I’ve selected [this image.](assets/images/jq-background-image.jpg) Also the darkness of the image contrasts nicely with the green palette I’m using. The other images I plan on using will be in the about section and will represent the eat, drink, about and explore titles. These will also be a nod to the creativity associated with the JQ.

I’ve visited the JQ a number of times in the past and found that green was quite synonymous with the area. A lot of doors and window frames are painted this colour and even the Chamberlain clock (a local landmark) is green. So with this in mind I found a palette using [ColorHunt](https://colorhunt.co/) to represent this. As a result I will use a combination of #FBFAD3 (light green), #729D39 (medium green) and #36622B (dark green) throughout. I plan on using Arial as my main font due to its versatility. I think it looks good in bold, regular and light font weights; and when a small amount of letter spacing is applied produces clean, professional looking text.

![Color Hunt - color palette 135904](readme-docs/screenshots/colorhunt-greens.png)

## Features
### Page Layout
* Responsive at all breakpoints. By using a combination of media queries and Bootstrap’s responsive grid means the sites layout and contents will adapt to the device it’s being viewed on.

### Navigational
* Fixed navigation bar so links to any other section of the website are accessible at any point.
* The logo is always in the top left of the page. This also has a secondary feature as a link back up to the home page (scrolls to the top).
* Navigation links on screen widths of lg and above are displayed inline at the top right of the page where a user would expect to find them.
* To encourage interaction I’ve put a simple hover class on the navigation links that makes them bold when hovered over.
* On screen widths of md and below these links are housed in a dropdown menu, which is toggled on/off via the click of a button. The button features Font Awesome’s icon “fa-bars”, which is associated with this dropdown menu function.
* I have chosen to adjust Bootstraps toggle effect on this dropdown menu using my own JavaScript code. When a link is selected via the dropdown menu the menu will now close automatically, whereas before it remained open blocking content. 

### Home / landing
* An image of a jeweller at work fills the entire landing page (100vh). This gives the page a modern and professional feel as well as an initial wow factor.
* I’ve used a text overlay box that features a brief description of the page and a button that on click scrolls the page down to the about section.
* All buttons on the site will invert colour when hovered, this is to show the user it is clickable and to get them to engage with it.

### About | Eat | Drink | Explore
* I have chosen to use a carousel for this section as I felt it was the best way to display this amount of information without overwhelming a user. By breaking the text up into bite sized pieces and adding some division between snippets of information makes it much more user-friendly whilst taking up a minimal amount of screen space.
* The carousel is made up of four slides and can be controlled by the arrows displayed or by the indictor buttons at the bottom. The indicator buttons also act as a visual guide, showing the user the number of slides. They also change in appearance to indicate what slide the user is on.
* One of the arrows will hide on slide one and four as a move left or right isn’t possible.
* Text appears on a contrasted background with a different image on each slide. The image is responsive as it gets hidden on widths of md and below to display text only. 

### What to do?
* On load a map renders in the ‘What to Do?’ section using the Google Maps API. I have set the co-ordinates so the map loads showing the JQ area.
* On large screen widths the map section and the Visit JQ Recommends section will appear inline. On anything below 992px the map section along with its buttons will fill the page width, while the Visit JQ Recommends section will be displayed underneath the map.
* When first loaded the Visit JQ Recommends section contains a little introduction and a brief explanation of how the map and its buttons work. This content gets changed throughout use.
* The buttons above the map will display a Font Awesome icon along with a button label, which represent each of the place types users can find out more about. On small devices the label gets hidden to show the logo only.
* As with all buttons on the page they have a hover class, which will invert the colours to show it’s clickable.
* When a button is clicked map markers get displayed on the map to indicate where we’d recommend visiting. Each button drops a different set of markers dependent on the category selected.
* Each marker is clickable and on click will display additional information such as the place name, a brief description and their website in the form of an info window. Once another marker is clicked the existing window will close and a new info window will display.
* In addition to the info window a review of the place will also appear in the Visit JQ Recommends section when a marker is clicked.

### Contact 
* All inputs are labelled and have a placeholder so it’s clear what goes into each field.
* The form layout changes at 768px to provide something suited for smaller screen widths.
* The form doesn’t use the `method="POST"` attribute instead the data collected will be sent in an email using EmailJS. When send is clicked the form data is sent to a template on EmailJS, which has been setup to put this data into a structured email and then sent on. [Example of what this looks like shown here.](readme-docs/screenshots/emailjs-example.jpg)
* I've used the correct input types for each input field but also written my own validation using JavaScript to check that all input fields are filled in so no empty forms can be sent and that the email address provided is valid.
* Once the send button is clicked a message will appear dependant on its status. This message will tell the user if:
    * The message has been sent correctly.
    * The message has failed to send.
    * One of the input fields hasn’t been filled in correctly.
* The send button will invert colour when hovered over like all other buttons. When the form is good to go and send is clicked the text on the button will then change to sending… showing that something is happening. Once successfully sent the button defaults back to send.

### Footer
* I’ve used icons representing the social links at the foot of the page. Each icon is associated with the intended destination and clicking them will send the user there via a new window/tab.

### Features left to implement
* Show a local weather forecast using a weather API as part of the about section. I had this as part of my original scope but at the bottom in terms of priority. This will be implemented underneath the about section using an API such as [Weatherbit.](https://www.weatherbit.io/api)
* An about Visit JQ page - providing service and company information.
* Gallery - linked up to an Instagram account.
* Newsletter subscription built into the contact form or as a pop up modal.

## Technologies
* HTML & CSS.
* JavaScript.
* Gitpod (IDE).
* Git, GitHub and GitHub Pages. Used for version control, hosting my repository and hosting my site.
* [Balsamiq.](https://balsamiq.com/) Program used for drawing the wireframes.
* [Bootstrap 5.](https://getbootstrap.com/) Grid layout, responsive design and basic styling.
* [Favicon.io.](https://favicon.io/) Created favicon's, which are visible in browser tabs and the bookmarks bar.
* [Font Awesome.](https://fontawesome.com/) Adds icons throughout the site to increase UX.
* [Google Maps JavaScript API.](https://developers.google.com/maps/documentation/javascript/overview) API used to render a Google map on my site. I used built in features such as markers and info windows to provide additional information. 
* [Custom map markers.](https://mapicons.mapsmarker.com/) Used to generate and download custom map markers that match the sites aesthetic.
* [EmailJS.](https://www.emailjs.com/) Connects the contact form to an email service. EmailJS uses the data inputted into the form to generate and send an email using a combination of JavaScript and a custom template.
* [TinyPNG.](https://tinypng.com/) Reduces file size of the image files used. 
* [Am I responsive?](http://ami.responsivedesign.is/) Gives a visual representation of how the website looks on different devices. Also used to produce the mock-up shown above.
* [AutoPrefixer.](https://autoprefixer.github.io/) Adds vendor prefixes to CSS code for use on additional browsers.
* W3C [HTML](https://validator.w3.org/) & [CSS](https://jigsaw.w3.org/css-validator/) validators.
* [JSHint.](https://jshint.com/) JavaScript validator.
* [Beautifier.](https://beautifier.io/) Formats code neatly.
* [Lighthouse in Chrome DevTools](https://developers.google.com/web/tools/lighthouse/?utm_source=devtools) for auditing performance, accessibility, SEO and best practices.

## Testing
Separate testing document can be found here - [testing documentation.](TESTING.md)

## Deployment
### Adding and committing files
I’ve been using Gitpod to write my code and using the terminal to add, commit and push code from my workspace to GitHub where it is stored remotely as shown in the course content.
1. Typing `git add` into the terminal will move files to the staging area. You should normally do this once a couple of minor additions or changes have been made or one large change or addition has been made. `git add .` will add all files that have been modified, the full stop here means all. If I want to be more selective I can type in the file name e.g. index.html or the files pathway e.g. assets/css/style.css instead of the full stop e.g. `git add index.html`.
2. To send these changes to the local repository we use `git commit`. Normally you'll want to include a brief description of these changes so instead use `git commit –m “ ”`. Between the “ ” write a clear, concise message detailing what this commit has done.
3. To view any changes on GitHub pages or when you want to send your work to the remote repository (GitHub in this instance) then use the `git push` command. This pushes all the previous commits made to the remote repository. When GitHub Pages is set up for the repository it will automatically pick up these changes and display the most up to date version that has been pushed. 

### GitHub Pages deployment
This site is hosted by GitHub pages and was deployed from the master branch of its GitHub repository. The following steps were taken to deploy this project:
1. Log in to GitHub and navigate to the chosen repository.
2. Select **settings** from the menu this is near the top of the page.
3. From the options menu on the left of the screen select **pages**. You can also scroll down to the GitHub Pages section near the bottom of the page and click the link shown.
4. Under the sub-heading **source** change the drop down menu that reads "none" so it reads "Branch:master". **Click save**.
5. The page will refresh, this means it was successful. Note that changes will take a while to take effect.
6. To retrieve the link go back to the GitHub Pages section, repeating step 3 where it will be displayed.

### Cloning
You can clone a repository so that it can be worked on locally in an IDE such as VSCode by following these steps:
1. Log in to GitHub and navigate to the repository you wish to clone.
2. Click the button that reads **code**. This button is situated to the left of the green Gitpod button near the top of the page.
3. To clone the repository using HTTPS, copy the link shown whilst HTTPS is selected. The link will look something like this: `https://github.com/YOUR-USERNAME/YOUR-REPOSITORY`
4. Open your local IDE and in the terminal navigate to the working directory of where you wish to insert the cloned directory.
5. Type `git clone` followed by the link you copied in step 3 into the terminal, this will look something like this: `git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY`
6. Press **enter** and the clone will be created in your selected / current working directory (cwd).

Taken from GitHub's documentation on cloning, which can be found 
[here.](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository#cloning-a-repository-to-github-desktop)

## Credits

### Code
* I used [Bootstrap](https://getbootstrap.com/) for grid layout, responsive design and simple styling.
* I used the `git branch` feature throughout this project. I learned how by watching - [Git and GitHub for beginners Crash Course on YouTube – freeCodeCamp.org.](https://youtu.be/RGOj5yH7evk)
* I also used this website - [Learn Git Branching.](https://learngitbranching.js.org/)
* Code to make the "Plan Your Visit" button scroll down to next section was from [plus2net.com](https://www.plus2net.com/html_tutorial/button-linking.php) and edited accordingly.
* I made the carousel by following a walkthrough by [FrontendTips.](https://youtu.be/rTB-UNl_B_Y) I made changes where I saw fit to suit my requirements and also added to the code.
* I learned about the basics of google map features by watching and reading the following:
    * [Google Maps JavaScript API documentation | Developers console.](https://developers.google.com/maps/documentation/javascript/overview)
    * How to Google Maps PDF by Eamonn Smyth via Slack.
    * [Google Maps API Tutorial | Custom Marker Icon | Multiple Info Window - Pradip Debnath.](https://youtu.be/Xptz0GQ2DO4)
    * [Google Maps JavaScript API Tutorial – Traversy Media.](https://youtu.be/Zxf1mnP5zcw)
    * [JavaScript Google Maps API Tutorial Updated [2021] - Sam Codes.](https://youtu.be/uPhWSyRqQDA)
* [EmailJS documentation](https://www.emailjs.com/docs/) was used to link my contact form to their service.
* I got the idea for the validation messages used in the contact form from this [Traversy Media video.](https://youtu.be/PP4Tr0l08NE)
* The pattern code used to validate email addresses by thier format/make up was taken from this [Online Tutorials video.](https://youtu.be/HzJngc-Se9Q)
* [W3schools](https://www.w3schools.com/) & [MDN.](https://developer.mozilla.org/en-US/) For general coding problem solving.

### Content
* Places that were included in the recommendation section were found via [Tripadvisor.](https://www.tripadvisor.co.uk/)
* The additional information shown in the What to Do? section was found on the following:
    * "Museums, heritage, creativity and culture. The JQ is bursting with activities and new experiences" tagline was from the[ Albert Dock, Liverpool](https://albertdock.com/things-to-do) site and adapted to fit the JQ. 
    * Google Maps - supplied co-ordinates.
    * Google Reviews - supplied the short description seen in the info windows.
    * [Wikipedia](https://en.wikipedia.org/wiki/Main_Page) - supplied the additional information on the stations.
    * All the reviews seen in the Visit JQ Recommends section were from [Tripadvisor.](https://www.tripadvisor.co.uk/Attraction_Review-g186402-d1475248-Reviews-Jewellery_Quarter-Birmingham_West_Midlands_England.html)
* Home / landing page hero image - [Ambitious Creative Co. Rick Barrett.](https://unsplash.com/photos/O9BznaWPO2M)
* Carousel slide 1 image - [jewelleryquarter.net.](https://jewelleryquarter.net/action-stations/)
* Carousel slide 2 image - [opentable.co.uk.](https://www.opentable.co.uk/r/lasan-restaurant-birmingham)
* Carousel slide 3 image - [jewelleryquarter.net.](https://jewelleryquarter.net/gallery/independents/)
* Carousel slide 4 image - [TimeOut article by David Baldwin.](https://www.timeout.com/birmingham/museums/museum-of-the-jewellery-quarter)
* The writing in the carousel was taken from the following sites and edited accordingly to suit:
    * About the JQ | Eat | Drink | Explore & Discover sections - [jewelleryquarter.net/visit.](https://jewelleryquarter.net/visit/#cbd5ec58a7)
    * Eat section - [discoverjq.co.uk.](https://www.discoverjq.co.uk/the-jewellery-quarter/)
    * About the JQ | Explore & Discover sections - [jewelleryquarter.net/learn-explore.](https://jewelleryquarter.net/learn-explore/)

### Acknowledgements
* Aukje van der Wal - [MS2 Lead Call via Slack.](https://us02web.zoom.us/rec/play/PL07KmO07O24DlzKgJ0W8aA1NIuCKpURunQB89g6LP71sRwXL7WF2YhHiOGYvPkYMwlMEvCfu3jOruhu.M8bzVC5Hy8UDC2Nz?startTime=1613671536000&_x_zm_rtaid=llLdywhYSJyduniSuy4unw.1618323037971.65d64db139e616abc014e51344401eb0&_x_zm_rhtaid=554)
* My mentor Brian Macharia for all the feedback and aiding in the planning and execution of this site.
* Tutor support at Code Institute for their help and support when needed most.
* Naoise Gaffney and Stefan Carter for taking the time to look at my site and giving feedback via 
slack's #peer-code-review channel.
* README examples - [AJGreaves](https://github.com/AJGreaves/portrait-artist/blob/master/README.md) / [crypticCaroline](https://github.com/crypticCaroline/ms1-plantfactory/blob/master/README.md).