// as a guide I used a combination of the CI walkthrough and EmailJS documentation to send the form

/** authorises the use of my EmailJS account- https://www.emailjs.com/docs/tutorial/creating-contact-form/*/
(function () {
    emailjs.init('user_S3AJosb3HjKtZGHIvYZxa');
})();

const submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', function () {
    // principle of validation taken from - https://www.w3schools.com/js/js_validation.asp
    const userName = document.forms['contact-form']['user_name'].value;
    const userEmail = document.forms['contact-form']['user_email'].value;
    const userMessage = document.forms['contact-form']['message'].value;
    // pattern const taken from - https://youtu.be/HzJngc-Se9Q
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let validUserEmail;

    // idea for validation messages came from this Traversy Media video - https://youtu.be/PP4Tr0l08NE
    // checks for blank input fields
    if (userName === '' || userEmail === '' || userMessage === '') {
        displayValidateMsg();
    }
    // if statements taken from - https://youtu.be/HzJngc-Se9Q and edited accordingly 
    // checks the email validity against the pattern variable. assigns validUserEmail a boolean value
    if (userEmail.match(pattern)) {
        validUserEmail = true;
    } else {
        validUserEmail = false;
        displayValidateMsg();
    }
    // checks that all input data has passed the previous two validation steps, then sends
    if (userName !== '' && userMessage !== '' && validUserEmail === true) {
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
        // blocks new page from loading
        return false;
    }
});

/** displays 'Please ensure all fields are correctly filled in!' message */
function displayValidateMsg() {
    document.getElementById('failed').style.display = 'none';
    document.getElementById('validate').style.display = 'block';
    // message hidden after 6seconds
    setTimeout(function () {
        document.getElementById('validate').style.display = 'none';
    }, 6000);
}

/** displays 'Your message has been sent!' message */
function displaySuccessMsg() {
    document.getElementById('failed').style.display = 'none';
    document.getElementById('validate').style.display = 'none';
    document.getElementById('success').style.display = 'block';
    // form reset - found on https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/reset
    document.getElementById('contact-form').reset();
    // changes text on button back to send (default)
    submitButton.value = 'send';
    // message hidden after 6seconds
    setTimeout(function () {
        document.getElementById('success').style.display = 'none';
    }, 6000);
}

/** displays 'Sorry, your message wasn't sent this time!' message */
function displayFailedMsg() {
    document.getElementById('validate').style.display = 'none';
    document.getElementById('success').style.display = 'none';
    document.getElementById('failed').style.display = 'block';
    // changes text on button back to send (default)
    submitButton.value = 'send';
    // message hidden after 6seconds
    setTimeout(function () {
        document.getElementById('failed').style.display = 'none';
    }, 6000);
}