// authorises EmailJS account - EmailJS documentation
(function () {
    emailjs.init('user_S3AJosb3HjKtZGHIvYZxa');
})();

submitButton.addEventListener('click', function () {
    let userName = document.forms['contact-form']['user_name'].value;
    let userEmail = document.forms['contact-form']['user_email'].value;
    let userMessage = document.forms['contact-form']['message'].value;
    // contact form validation guide on https://www.w3schools.com/js/js_validation.asp
    if (userName === '' || userEmail === '' || userMessage === '') {
        document.getElementById('validate').style.display = 'block';
        setTimeout(function () {
            document.getElementById('validate').style.display = 'none';
        }, 6000);
    };
    // idea of showing and hiding alerts came from this Traversy Media video - https://youtu.be/PP4Tr0l08NE
    if (userName !== '' && userEmail !== '' && userMessage !== '') {
        emailjs.send('service_779rxdl', 'template_0i79coo', {
                'user_name': userName,
                'user_email': userEmail,
                'message': userMessage
            })
            .then(function () {
                // hides failed message if / when resubmitted
                document.getElementById('failed').style.display = 'none';
                document.getElementById('validate').style.display = 'none';
                // reset found on https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/reset
                document.getElementById('contact-form').reset();
                // shows success message
                document.getElementById('success').style.display = 'block';
                // hides success message after 10s
                setTimeout(function () {
                    document.getElementById('success').style.display = 'none';
                }, 6000);
            },
            function () {
                // shows failed message if submission fails
                document.getElementById('failed').style.display = 'block';
                setTimeout(function () {
                    document.getElementById('failed').style.display = 'none';
                }, 6000);
            });
        // To block from loading a new page
        return false;
    };
});