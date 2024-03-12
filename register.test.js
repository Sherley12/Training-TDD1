const { registerUser } = require('./register.js');
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './register.html'), 'utf8');


// Load the HTML file for testing
document.documentElement.innerHTML = html;


// Test case to check if the HTML contains an input field for username
test('Check if it has a username input field', () => {
    const usernameInput = document.querySelector('input[name="username"]');
    expect(usernameInput).toBeTruthy();
});

// Test case to check if the HTML contains an input field for password
test('Check if it has a password input field', () => {
    const passwordInput = document.querySelector('input[name="password"]');
    expect(passwordInput).toBeTruthy();
});


// Test case to check if the HTML contains an input field for Indian mobile number
test('Check if it has an Indian mobile number input field', () => {
    const phoneNumberInput = document.querySelector('input[name="phoneNumber"]');
    expect(phoneNumberInput).toBeTruthy();
});

// Test case to check if the HTML contains a submit button
test('Check if it has a submit button', () => {
    const submitButton = document.querySelector('button[type="button"]');
    expect(submitButton).toBeTruthy();
});

// Test case to check if the HTML has a heading "Register"
test('Check if it has a heading "Register"', () => {
    const heading = document.querySelector('h1');
    expect(heading.textContent).toBe('Register');
});

// Test case to check if the submit button is clickable
test('Check if the submit button is clickable', () => {
    const submitButton = document.querySelector('button[type="button"]');
    expect(submitButton.disabled).toBe(false);
});

test('Check if the notification is displayed for empty fields', () => {
    const notification = document.getElementById('notification');

    // Simulate a user attempting to register without entering any values
    registerUser();

    // Check the notification content and style
    expect(notification.textContent).toBe('Enter all fields.'); // Adjust this based on your implementation
    
});

test('Check if the notification is displayed when username is empty', () => {
    const notification = document.getElementById('notification');

    // Mock the DOM elements with an empty username
    document.getElementById('username').value = '';

    // Simulate a user attempting to register
    registerUser();

    // Check the notification content and style
    expect(notification.textContent).toBe('Enter all fields.'); // Adjust this based on your implementation
   
});

test('Check if the notification is displayed when password is empty', () => {
    const notification = document.getElementById('notification');

    // Mock the DOM elements with an empty password
    document.getElementById('password').value = '';

    // Simulate a user attempting to register
    registerUser();

    // Check the notification content and style
    expect(notification.textContent).toBe('Enter all fields.'); // Adjust this based on your implementation
   
});

test('Check if the notification is displayed when phoneNumber is empty', () => {
    const notification = document.getElementById('notification');

    // Mock the DOM elements with an empty phoneNumber
    document.getElementById('phoneNumber').value = '';

    // Simulate a user attempting to register
    registerUser();

    // Check the notification content and style
    expect(notification.textContent).toBe('Enter all fields.'); // Adjust this based on your implementation
   
});

test('should display success message for valid credentials', () => {
    // Set values for valid credentials
    document.getElementById('username').value = 'Valid21!';
    document.getElementById('password').value = '12345';
    document.getElementById('phoneNumber').value = '1234567890';

    // Call the function
    registerUser();

    // Check if success message is displayed
    expect(document.getElementById('notification').textContent).toBe('You have registered!');
});

test('should display "Enter a valid username" message for incorrect username', () => {
    // Set values for incorrect username, correct password, and correct phone number
    document.getElementById('username').value = 'invalidUsername';
    document.getElementById('password').value = '12345';
    document.getElementById('phoneNumber').value = '1234567890';

    // Call the function
    registerUser();

    // Check if "Enter a valid username" message is displayed
    expect(document.getElementById('notification').textContent).toContain('Enter a valid username. It should contain 1 capital letter, 2 numbers, 1 special character, and be less than or equal to 8 characters.');
});

test('should display "Enter a valid password" message for incorrect password', () => {
    // Set values for correct username, incorrect password, and correct phone number
    document.getElementById('username').value = 'Valid21!';
    document.getElementById('password').value = 'invalidPass';
    document.getElementById('phoneNumber').value = '1234567890';

    // Call the function
    registerUser();

    // Check if "Enter a valid password" message is displayed
    expect(document.getElementById('notification').textContent).toContain('Enter a valid password. It should be a numeric value with a minimum of 3 and a maximum of 5 digits.');
});

test('should display "Enter a valid Indian mobile number" message for incorrect phone number', () => {
    // Set values for correct username, correct password, and incorrect phone number
    document.getElementById('username').value = 'Valid21!';
    document.getElementById('password').value = '12345';
    document.getElementById('phoneNumber').value = '123456789'; // Incorrect phone number (9 digits)

    // Call the function
    registerUser();

    // Check if "Enter a valid Indian mobile number" message is displayed
    expect(document.getElementById('notification').textContent).toContain('Enter a valid Indian mobile number (10 digits).');
});
