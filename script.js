


const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const page = document.getElementById('page');

// Get the links
const loginLink = document.getElementById('login-link');
const signupLink = document.getElementById('signup-link');

// Add event listeners to the links
loginLink.addEventListener('click', () => {
    loginForm.style.display = 'block';
    signupForm.style.display = 'none';
});

signupLink.addEventListener('click', () => {
    loginForm.style.display = 'none';
    signupForm.style.display = 'block';
});

// Add event listeners to the forms
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // TO DO: Implement login logic here
    console.log(`Login attempt: ${username} ${password}`);
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    page.innerHTML = "you are logged in ";


});

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    // TO DO: Implement sign up logic here
    console.log(`Sign up attempt: ${username} ${email} ${password} ${confirmPassword}`);
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    page.innerHTML = "you are Signed up  in ";
});
