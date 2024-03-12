// Import the necessary functions and elements for testing
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './forgot.html'), 'utf8');
const js = fs.readFileSync(path.resolve(__dirname, './forgot.js'), 'utf8');
document.documentElement.innerHTML = html;
// Jest test case to check if the HTML contains the necessary elements
describe('Forgot Password Page', () => {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
        eval(js);
    });

    test('Check if the container elements are present', () => {
        const wrapper = document.querySelector('.wrapper');
        const inputBox = document.querySelector('.input-box');
        const phoneNumberInput = document.getElementById('phoneNumber');
        const submitButton = document.querySelector('.btn');
        const notification = document.getElementById('notification');

        expect(wrapper).not.toBeNull();
        expect(inputBox).not.toBeNull();
        expect(phoneNumberInput).not.toBeNull();
        expect(submitButton).not.toBeNull();
        expect(notification).not.toBeNull();
    });

    test('Check if Indian phone number input field is present', () => {
        const phoneNumberInput = document.getElementById('phoneNumber');
        expect(phoneNumberInput).not.toBeNull();
        expect(phoneNumberInput.placeholder).toBe('Enter Indian Phone Number (10 digits)');
        expect(phoneNumberInput.getAttribute('type')).toBe('tel');
        expect(phoneNumberInput.getAttribute('maxlength')).toBe('10');
        expect(phoneNumberInput.getAttribute('pattern')).toBe('\\d{10}');
        expect(phoneNumberInput.required).toBe(true);
    });

    test('Check if submit button is present', () => {
        const submitButton = document.querySelector('.btn');
        expect(submitButton).not.toBeNull();
        expect(submitButton.textContent).toBe('Submit');
    });
});
const { sendOTP } = require('./forgot.js');
test('Check if OTP is sent for valid 10-digit number', () => {
    // Set valid 10-digit phone number
    document.getElementById('phoneNumber').value = '1234567890';

    // Call the sendOTP function
    sendOTP();

    // Check the notification content and style
    const notification = document.getElementById('notification');
    expect(notification.textContent).toBe('OTP has been sent!'); 
    expect(document.getElementById('phoneNumber').value).toBe(''); // Check if the input is cleared
});


test('Check if error message is displayed for invalid phone number', () => {
    // Set an invalid phone number (less than 10 digits)
    document.getElementById('phoneNumber').value = '123';

    // Call the sendOTP function
    sendOTP();

    // Check the notification content and style for an error message
    const notification = document.getElementById('notification');
    expect(notification.textContent).toBe('Enter a valid 10-digit phone number.');
    expect(notification.style.color).toBe('rgb(220, 53, 69)'); // Match the RGB color format for error message
    // You might want to add additional checks for input state based on your implementation
});
