document.getElementById('signin-btn').addEventListener('click', function() {
    const signinEmailInput = document.querySelector('input[type="email"]');
    const signinEmail = signinEmailInput.value;
    const signinMessageElement = document.createElement('p');
    signinMessageElement.style.color = 'red';
    signinMessageElement.id = 'signin-error-message';

    const existingSigninMessage = document.getElementById('signin-error-message');
    if (existingSigninMessage) {
        existingSigninMessage.remove();
    }

  
    if (!signinEmail.includes('@') || !signinEmail.includes('.') || signinEmail.length < 8) {
        signinMessageElement.textContent = 'Please enter a valid email address with at least 8 characters.';
        signinEmailInput.parentNode.insertBefore(signinMessageElement, signinEmailInput.nextSibling);
    } else {
        console.log('Sign-in email is valid');
    }
});
