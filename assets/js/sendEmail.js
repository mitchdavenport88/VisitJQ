function sendMail(contactForm) {
    emailjs.send("service_779rxdl","template_0i79coo", {
        "user_name": contactForm.name.value,
        "user_email": contactForm.email.value,
        "message": contactForm.message.value
    })
    .then(
        function(response) {
            console.log('success', response);
        },
        function(error) {
            console.log('failed', error);
        });
    return false;
}