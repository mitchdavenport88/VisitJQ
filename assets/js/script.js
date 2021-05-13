// plan your visit (landing page) button
const planButton = document.getElementById('plan-button');
// map buttons - travel / food / drink / sleep / to do
const travelButton = document.getElementById('travel-button');
const foodButton = document.getElementById('food-button');
const drinkButton = document.getElementById('drink-button');
const sleepButton = document.getElementById('sleep-button');
const toDoButton = document.getElementById('todo-button');
// submit button (contact form)
const submitButton = document.getElementById('submit-button');

// plan your visit button - scrolls down to about section onclick
// code from https://www.plus2net.com/html_tutorial/button-linking.php
planButton.addEventListener('click', function() {
    parent.location='#about';
});

// button hover - inverts colors of selected buttons
const allButtons = [planButton, travelButton, foodButton, drinkButton, sleepButton, toDoButton, submitButton];
for (i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener('mouseover', function() {
        this.classList.add('button-bg-after');
    });
    allButtons[i].addEventListener('mouseout', function() {
        this.classList.remove('button-bg-after');
    });
}

// hides the drop down menu once a link has been clicked (overides bootstrap toggle)
const dropDownLinks = document.getElementsByClassName('nav-link');
const navbarNav = document.getElementById('navbarNav');
// dropDownLinks returns an array - need to apply event listener to each link
for (i = 0; i < dropDownLinks.length; i++) {
    dropDownLinks[i].addEventListener('click', function() {
        // bootstap class of .show is toggled in #navbarNav to show/hide dropdown
        navbarNav.classList.remove('show');
    });
}

// carousel - walkthrough found on https://www.youtube.com/watch?v=rTB-UNl_B_Y and edited accordingly
const slider = document.querySelector('.slider');
const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');
const indicatorParents = document.querySelector('.carousel-controls ul');
let sectionIndex = 0;

document.querySelectorAll('.carousel-controls li').forEach(function(indicator, ind) {
    indicator.addEventListener('click', function() {
        sectionIndex = ind;
        document.querySelector('.carousel-controls .selected').classList.remove('selected');
        indicator.classList.add('selected');
        slider.style.transform = 'translate('+ (sectionIndex) * -25 +'%)';
        displayArrow();
    });
});

leftArrow.addEventListener('click', function() {
    sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 0;
    document.querySelector('.carousel-controls .selected').classList.remove('selected');
    indicatorParents.children[sectionIndex].classList.add('selected');
    slider.style.transform = 'translate('+ (sectionIndex) * -25 +'%)';
    displayArrow();
});

rightArrow.addEventListener('click', function() {
    sectionIndex = (sectionIndex < 3) ? sectionIndex + 1 : 3;
    document.querySelector('.carousel-controls .selected').classList.remove('selected');
    indicatorParents.children[sectionIndex].classList.add('selected');
    slider.style.transform = 'translate('+ (sectionIndex) * -25 +'%)';
    displayArrow();
});

/**
 * this function controls what arrows display and when depending on index number
 */
function displayArrow() {
    if (sectionIndex === 0) {
        leftArrow.style.display = 'none';
        rightArrow.style.display = 'block';
    } else if (sectionIndex !== 0 && sectionIndex !== 3) {
        leftArrow.style.display = 'block';
        rightArrow.style.display = 'block';
    } else if (sectionIndex === 3) {
        leftArrow.style.display = 'block';
        rightArrow.style.display = 'none';
    }
}
window.onload = displayArrow();