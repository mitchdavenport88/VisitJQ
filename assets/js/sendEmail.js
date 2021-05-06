// CI walkthrough / EmailJS documentation / Mozilla
function sendMail(contactForm) {
    emailjs.send('service_779rxdl', 'template_0i79coo', {
        'user_name': contactForm.user_name.value,
        'user_email': contactForm.user_email.value,
        'message': contactForm.message.value
    })
    .then(
        function(response) {
            console.log('success', response);
            //reset found on https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/reset
            document.getElementById('contact-form').reset();
        },
        function(error) {
            console.log('failed', error);
        }
    );
    // To block from loading a new page
    return false;
}