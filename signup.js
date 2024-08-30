document.getElementById('signup-btn').addEventListener('click', function() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
    const messageElement = document.createElement('p');
    messageElement.style.color = 'red';
    messageElement.id = 'error-message';

    const passwordInput = document.getElementById('password');
    const password = passwordInput.value;
    const messageElement2 = document.createElement('p');
    messageElement2.style.color = 'red';
    messageElement2.id = 'error-message2';

   
    const existingMessage = document.getElementById('error-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    const existingMessage2 = document.getElementById('error-message2');
    if (existingMessage2) {
        existingMessage2.remove();
    }

    let hasError = false;  

    if (!email.includes('@') || !email.includes('.')) {
        messageElement.textContent = 'Please enter a valid email address.';
        emailInput.parentNode.insertBefore(messageElement, emailInput.nextSibling);
        hasError = true;
    }

   
    if (password.length < 8) {
        messageElement2.textContent = 'Please enter at least 8 characters.';
        passwordInput.parentNode.insertBefore(messageElement2, passwordInput.nextSibling);
        hasError = true;
    }

    if (!hasError) {
        window.location.href = 'signin.html';
    }
});

document.getElementById('existing').addEventListener('click', function() {
    window.location.href = 'signin.html';
});
