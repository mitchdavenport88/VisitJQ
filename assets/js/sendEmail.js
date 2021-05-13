// idea for form validation messages came from this Traversy Media video - https://youtu.be/PP4Tr0l08NE
// CI walkthrough and EmailJS documentation was used as a guide to send form

/**
 * this function authorises the use of my EmailJS account
 * @author EmailJS documentation - https://www.emailjs.com/docs/tutorial/creating-contact-form/
 */
(function () {
    emailjs.init('user_S3AJosb3HjKtZGHIvYZxa');
})();

submitButton.addEventListener('click', function () {
    // following if statements validate data input - https://www.w3schools.com/js/js_validation.asp
    let userName = document.forms['contact-form']['user_name'].value;
    let userEmail = document.forms['contact-form']['user_email'].value;
    let userMessage = document.forms['contact-form']['message'].value;
    // if statement checks for blank input fields
    if (userName === '' || userEmail === '' || userMessage === '') {
        displayValidateMsg();
    }
    // if statement checks that all input fields have been filled in and then sends the data
    if (userName !== '' && userEmail !== '' && userMessage !== '') {
        // changes text on button to sending...
        submitButton.value = 'sending...';
        // EmailJS template information
        emailjs.send('service_779rxdl', 'template_0i79coo', {
                'user_name': userName,
                'user_email': userEmail,
                'message': userMessage
            })
            .then(function () {
                displaySuccessMsg();
            },
            function () {
                displayFailedMsg();
            });
        // to block from loading a new page
        return false;
    }
});

/**
 * this function displays 'Please fill in all fields!' message if an input field is blank
 * the message is then hidden after 6 seconds
 */
function displayValidateMsg() {
    document.getElementById('failed').style.display = 'none';
    document.getElementById('validate').style.display = 'block';
    setTimeout(function () {
        document.getElementById('validate').style.display = 'none';
    }, 6000);
}

/**
 * this function displays 'Your message has been sent!' message if all input fields are complete
 * resets form - found on https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/reset
 * changes text on button back to default (send)
 * the message is then hidden after 6 seconds
 */
function displaySuccessMsg() {
    document.getElementById('failed').style.display = 'none';
    document.getElementById('validate').style.display = 'none';
    document.getElementById('contact-form').reset();
    document.getElementById('success').style.display = 'block';
    submitButton.value = 'send';
    setTimeout(function () {
        document.getElementById('success').style.display = 'none';
    }, 6000);
}

/**
 * this function displays 'Sorry, your message wasn't sent this time!' if sending fails
 * changes text on button back to default (send)
 * the message is then hidden after 6 seconds
 */
function displayFailedMsg() {
    document.getElementById('validate').style.display = 'none';
    document.getElementById('success').style.display = 'none';
    document.getElementById('failed').style.display = 'block';
    submitButton.value = 'send';
    setTimeout(function () {
        document.getElementById('failed').style.display = 'none';
    }, 6000);
}
    