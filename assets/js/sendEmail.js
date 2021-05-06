// CI walkthrough / EmailJS documentation / Mozilla
function sendMail(contactForm) {
    emailjs.send('service_779rxdl', 'template_0i79coo', {
        'user_name': contactForm.user_name.value,
        'user_email': contactForm.user_email.value,
        'message': contactForm.message.value
    })
    .then(
        function() {
            // reset found on https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/reset
            document.getElementById('contact-form').reset();
            // shows success message
            document.getElementById('success').style.display = 'block';
            // hides message after 10s
            setTimeout(function() {
                document.getElementById('success').style.display = 'none';
            }, 10000);
        },
        function() {
            // shows failed message
            document.getElementById('failed').style.display = 'block';
        }
    );
    // To block from loading a new page
    return false;
}