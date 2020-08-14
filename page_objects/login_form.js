let pageInfo = require('../data/page_info.json')
let users = require('../data/users.json')

let LoginForm = function() {     
    let loginButton = $('[type="submit"]');
    let formLocator = $('form[name="loginForm"]');    
  
    this.title = function() {
        return browser.getTitle();
    };

    this.get = function() {       
        browser.get(pageInfo.url);        
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

    this.isInputValueCorrect = function(inputName, value) {
        return expect(inputName.getAttribute('value')).toEqual(value);
    }

    this.clickLogin = function() {
        loginButton.click();
        browser.sleep(2000);        
    };
    
    this.isLoginFormOpened = function() {
        return expect(formLocator.isPresent()).toBe(true);
    }

    this.logInAsAdmin = function() {
        this.get();
        this.enterUserName(users.admin.name);
        this.enterUserPassword(users.admin.password);
        this.clickLogin();
    }
  };  

  module.exports = new LoginForm();