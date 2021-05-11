// authorises EmailJS account - EmailJS documentation
(function () {
    emailjs.init('user_S3AJosb3HjKtZGHIvYZxa');
})();

submitButton.addEventListener('click', function () {
    let userName = document.forms['contact-form']['user_name'].value;
    let userEmail = document.forms['contact-form']['user_email'].value;
    let userMessage = document.forms['contact-form']['message'].value;
    // validates data - guide on https://www.w3schools.com/js/js_validation.asp
    if (userName === '' || userEmail === '' || userMessage === '') {
        document.getElementById('validate').style.display = 'block';
        // hides validation message after 6s
        setTimeout(function () {
            document.getElementById('validate').style.display = 'none';
        }, 6000);
    };
    // idea of showing and hiding alerts came from this Traversy Media video - https://youtu.be/PP4Tr0l08NE
    if (userName !== '' && userEmail !== '' && userMessage !== '') {
        // changes text on button to sending...
        submitButton.value = 'sending...';
        emailjs.send('service_779rxdl', 'template_0i79coo', {
                'user_name': userName,
                'user_email': userEmail,
                'message': userMessage
            })
            .then(function () {
                // hides others messages if / when resubmitted
                document.getElementById('failed').style.display = 'none';
                document.getElementById('validate').style.display = 'none';
                // reset found on https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/reset
                document.getElementById('contact-form').reset();
                // shows success message
                document.getElementById('success').style.display = 'block';
                // changes text on button back to send
                submitButton.value = 'send';
                // hides success message after 6s
                setTimeout(function () {
                    document.getElementById('success').style.display = 'none';
                }, 6000);
            },
            function () {
                // hides others messages
                document.getElementById('validate').style.display = 'none';
                document.getElementById('success').style.display = 'none';
                // shows failed message if submission fails
                document.getElementById('failed').style.display = 'block';
                // changes text on button back to send
                submitButton.value = 'send';
                // hides failed message after 6s
                setTimeout(function () {
                    document.getElementById('failed').style.display = 'none';
                }, 6000);
            });
        // To block from loading a new page
        return false;
    };
});