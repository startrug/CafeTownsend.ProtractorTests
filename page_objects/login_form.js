let pageUrl = require('../data/page_info.json').url;
let admin = require('../data/users.json').admin;
let submitForm = require('../helpers/common_methods.js').submitForm;

let LoginForm = function() {
    let loginButton = $('[type="submit"]');
    let formLocator = $('form[name="loginForm"]');

    this.title = function() {
        return browser.getTitle();
    };

    this.get = function() {
        browser.get(pageUrl);
    };

    this.hasCorrectTitle = function(expectedTitle) {
        return expect(this.title()).toEqual(expectedTitle);
    };

    this.enterUserName = function(name) {
        userNameInput = element(by.model('user.name'));
        userNameInput.sendKeys(name);
    };

    this.enterUserPassword = function(password) {
        userPasswordInput = element(by.model('user.password'));
        userPasswordInput.sendKeys(password);
    };

    this.isLoginButtonDisabled = function() {
        return loginButton.getAttribute('ng-disabled');
    };

    this.isLoginFormOpened = function() {
        return expect(formLocator.isPresent()).toBe(true);
    }

    this.logInAsAdmin = function() {
        this.get();
        this.enterUserName(admin.name);
        this.enterUserPassword(admin.password);
        submitForm();
    }
  };

  module.exports = new LoginForm();