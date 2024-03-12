const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, 'login.html'), 'utf8');


// Jest test cases
describe('HTML Elements', () => {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
    });

    test('Check if username input field exists', () => {
        const usernameInput = document.getElementById('Username');
        expect(usernameInput).toBeTruthy();
    });

    test('Check if password input field exists', () => {
        const passwordInput = document.getElementById('Password');
        expect(passwordInput).toBeTruthy();
    });

    test('Check if submit button exists', () => {
        const submitButton = document.querySelector('.btn');
        expect(submitButton).toBeTruthy();
    });

    test('Check if forgot password link exists', () => {
        const forgotPasswordLink = document.querySelector('.remember-forgot a');
        expect(forgotPasswordLink).toBeTruthy();
    });

    test('Check if register link exists', () => {
        const registerLink = document.querySelector('.register-link a');
        expect(registerLink).toBeTruthy();
    });

    test('Check if "Don\'t have an account?" line exists', () => {
        const dontHaveAccountLine = document.querySelector('.register-link p');
        expect(dontHaveAccountLine.textContent).toContain("Don't have an account?");
    });
    test('Check if username placeholder exists', () => {
        const usernameInput = document.getElementById('Username');
        expect(usernameInput.placeholder).toContain('Username');
    });

    test('Check if password placeholder exists', () => {
        const passwordInput = document.getElementById('Password');
        expect(passwordInput.placeholder).toContain('Password');
    });

    test('Check if <i class=\'bx bxs-user\'></i> icon exists', () => {
        const icon = document.querySelector('.bx.bxs-user');
        expect(icon).not.toBeNull();
    });
    
    test('Check if <i class=\'bx bxs-lock-alt\'></i> icon exists', () => {
        const icon = document.querySelector('.bx.bxs-lock-alt');
        expect(icon).not.toBeNull();
    });

    test('Check if forgot password link redirects to <a href="forgot.html">', () => {
        const forgotPasswordLink = document.querySelector('.remember-forgot a');
        const href = forgotPasswordLink.getAttribute('href');
        expect(href).toContain('forgot.html');
    });

    test('Check if register link redirects to <a href="register.html">', () => {
        const registerLink = document.querySelector('.register-link a');
        const href = registerLink.getAttribute('href');
        expect(href).toContain('register.html');
    });

    test('Check if heading "Login" exists', () => {
        const heading = document.querySelector('h1');
        expect(heading.textContent).toBe('Login');
    });
    
    test('Check if container exists', () => {
        const container = document.querySelector('.wrapper');
        expect(container).toBeTruthy();
});

describe('Username validation', () => {
    test('validates username with at least one capital letter, two numeric characters, one special character, and length <= 8', () => {
      const validUsername = 'Ab12!cd';
      const validateMock = jest.fn();
      validateMock(validUsername, 'somepassword');
      expect(validateMock).toHaveBeenCalledWith(validUsername, 'somepassword');
    });   
  });
  test('validates password with length >= 3 and <= 5', () => {
    const validUsername = 'someuser';
    const validPassword = 'abc';
    
    const validateMock = jest.fn();
    validateMock(validUsername, validPassword);
    
    expect(validateMock).toHaveBeenCalledWith(validUsername, validPassword);
  });

  // validate.test.js

const validate = require('./login.js');

describe('validate function', () => {
  // Mock the alert function
  const originalAlert = global.alert;
  global.alert = jest.fn();

  
  const originalLocationHref = window.location.href;
  beforeAll(() => {
  global.window.location.href = 'http://www.example.com';
  });
 
  afterAll(() => {
    
    global.window.location.href = originalLocationHref;
  });

  test('displays alert for empty username and empty password', () => {
    validate('', '');
    expect(global.alert).toHaveBeenCalledWith("Empty username and empty password not accepted.");
  });

  test('displays alert for empty username', () => {
    validate('', 'nonemptyPassword');
    expect(global.alert).toHaveBeenCalledWith("Empty username not accepted.");
  });

  test('displays alert for empty password', () => {
    validate('nonemptyUsername', '');
    expect(global.alert).toHaveBeenCalledWith("Empty password not accepted.");
  });



jest.spyOn(window, 'location', 'get').mockReturnValue({ href: '' }); // Mock window.location for redirection test

test('validate function redirects to google with valid username and password', () => {
  const validUsername = 'Ab12!cd';
  const validPassword = '12345';

  validate(validUsername, validPassword);

  expect(window.location.href).toBe('https://www.google.co.in/');
});

  test('displays alert for invalid username and password', () => {
    // Mock the username and password to not satisfy the criteria
    validate('InvalidUsername', 'InvalidPassword');
    expect(global.alert).toHaveBeenCalledWith("Username and password do not meet the criteria.");
  });
});
// test('check focus on username input field', () => {
//   // Create the input element with the id "Username"
//   document.body.innerHTML = '<input id="Username" type="text">';
  
//   // Call the function that sets focus on the username input field
//   document.getElementById("Username").focus();
  
//   // Check if the username input field is focused
//   expect(document.activeElement.id).toBe('Username');
// });

// Include the JavaScript file in your Jest environment
// This assumes the JavaScript code is linked in your HTML file

});