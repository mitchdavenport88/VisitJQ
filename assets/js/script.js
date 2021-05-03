// carousel
// walkthrough found on https://www.youtube.com/watch?v=rTB-UNl_B_Y and edited accordingly
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

// added function to hide / show arrows depending on index number
window.onload = displayArrow();

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
    };
};