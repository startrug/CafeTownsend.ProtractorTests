let commonMethods = require('../helpers/common_methods.js');
let loginForm = require('../page_objects/login_form.js');
let admin = require('../data/users.json').admin;
let pageTitle = require('../data/page_info.json').title;

describe('When app is opened', function() {
  beforeAll(() => {
    loginForm.get();
  });

  it('then website should has expected title', function() {
    loginForm.hasCorrectTitle(pageTitle);
  });

  it('then \"Login\" button should be disabled', function() {
    expect(loginForm.isLoginButtonDisabled()).toEqual('true');
  });
});

describe('When user set login and password', function() {
  beforeAll(() => {
    loginForm.enterUserName(admin.name);
    loginForm.enterUserPassword(admin.password);
  });

  afterAll(() => {
    clearInputs()
  });

  it('then login input should contain correct value', function() {
    commonMethods.isInputValueCorrect(loginForm.userNameInput, admin.name)
  });

  it('then password input should contain correct value', function() {
    commonMethods.isInputValueCorrect(loginForm.userPasswordInput, admin.password)
  });

  it('then login button should be enabled', function() {
    expect(loginForm.isLoginButtonDisabled()).toEqual('false');
  });
});

describe('When user set login only and click \"Login\" button', function() {
  beforeAll(() => {
    loginForm.enterUserName(admin.name);
    commonMethods.submitForm();
  });
  afterAll(() => {
    clearInputs();
  });
  it('then login form should be still visible', function() {
    loginForm.isLoginFormOpened();
  });
});

describe('When user set password only and click \"Login\" button', function() {
  beforeAll(() => {
    loginForm.enterUserPassword(admin.password);
    commonMethods.submitForm();
  });
  afterAll(() => {
    clearInputs();
  });
  it('then login form should be still visible', function() {
    loginForm.isLoginFormOpened();
  });
});

describe('When user set correct user name and incorrect password and click \"Login\" button', function() {
  beforeAll(() => {
    loginForm.enterUserName('test')
    loginForm.enterUserPassword(admin.password);
    commonMethods.submitForm();
  });
  afterAll(() => {
    clearInputs();
  });
  it('then login form should be still visible', function() {
    loginForm.isLoginFormOpened();
  });
  it('then error message should be displayed', function() {
    loginForm.isErrorMessageDisplayed();
  });
  it('then error message should contain proper text', function() {
    loginForm.isTextOfErrorMessageCorrect();
  });
});

describe('When user set incorrect user name and correct password and click \"Login\" button', function() {
  beforeAll(() => {
    loginForm.enterUserName(admin.name)
    loginForm.enterUserPassword('qwer1234');
    commonMethods.submitForm();
  });
  afterAll(() => {
    clearInputs();
  });
  it('then login form should be still visible', function() {
    loginForm.isLoginFormOpened();
  });
  it('then error message should be displayed', function() {
    loginForm.isErrorMessageDisplayed();
  });
  it('then error message should contain proper text', function() {
    loginForm.isTextOfErrorMessageCorrect();
  });
});

function clearInputs() {
  loginForm.userNameInput.clear();
  loginForm.userPasswordInput.clear();
}
