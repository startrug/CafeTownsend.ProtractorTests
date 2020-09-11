let pageUrl = require('../data/page_info.json').url;
let admin = require('../data/users.json').admin;
let submitForm = require('../helpers/common_methods.js').submitForm;

function LoginForm() {
    this.userNameInput = element(by.model('user.name'));
    this.userPasswordInput = element(by.model('user.password'));

    let loginButton = $('[type="submit"]');
    let formLocator = $('form[name="loginForm"]');
    let errorLocator = $('.error-message');


    this.title = () => browser.getTitle();

    this.get = () => browser.get(pageUrl);

    this.hasCorrectTitle = (expectedTitle) => expect(this.title()).toEqual(expectedTitle);

    this.enterUserName = (name) => this.userNameInput.sendKeys(name);

    this.enterUserPassword = (password) => this.userPasswordInput.sendKeys(password);

    this.isLoginButtonDisabled = () => loginButton.getAttribute('ng-disabled');

    this.isLoginFormOpened = () => expect(formLocator.isPresent()).toBe(true);

    this.isErrorMessageDisplayed = () => expect(errorLocator.isPresent()).toBe(true);

    this.isTextOfErrorMessageCorrect = () => expect(errorLocator.getText()).toEqual('Invalid username or password!')

    this.logInAsAdmin = () => {
        this.get();
        this.enterUserName(admin.name);
        this.enterUserPassword(admin.password);
        submitForm();
    }
  };

  module.exports = new LoginForm();