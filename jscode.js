document.addEventListener('DOMContentLoaded', function() {
    const captcha = document.getElementById('captcha');
    const refreshButton = document.getElementById('refresh');
    const submitButton = document.getElementById('submit');
    const captchaInput = document.getElementById('captchaInput');
    const result = document.getElementById('result');

    function generateCaptcha() {
        const charsArray = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let captchaText = '';
        for (let i = 0; i<6; i++) {
            const randomIndex = Math.floor(Math.random() * charsArray.length);
            captchaText += charsArray[randomIndex];
        }
        return captchaText;
    }
    function setCaptcha() {
        captcha.innerText = generateCaptcha();
    }   
    refreshButton.addEventListener('click', function() {
        setCaptcha();
        captchaInput.value = '';
        result.innerText = '';
    });

    submitButton.addEventListener('click', function() {
        const userCaptcha = captchaInput.value;
        if (userCaptcha === captcha.innerText) {
            result.innerText = 'CAPTCHA matched!';
            result.style.color = 'green';
        } else {
            result.innerText = 'CAPTCHA does not match. Please try again.';
            result.style.color = 'red';
        }
    });

    setCaptcha();
});
