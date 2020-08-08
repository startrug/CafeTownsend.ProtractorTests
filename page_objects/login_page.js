let data = require('../data/test_data.json')

let LoginPage = function() {     
    let loginButton = $('[type="submit"]');
    let formLocator = $('form[name="loginForm"]');    
  
    this.title = function() {
        return browser.getTitle();
    };

    this.get = function() {       
        browser.get(data.page.url);        
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
  };  

  module.exports = new LoginPage();