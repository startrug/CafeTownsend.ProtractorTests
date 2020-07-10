let LoginPage = function() {     
    let loginButton = $('[type="submit"]');    
  
    this.title = function() {
        return browser.getTitle();
    };

    this.get = function() {       
        browser.get('http://cafetownsend-angular-rails.herokuapp.com/login');        
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
        return expect(loginButton.getAttribute('ng-disabled')).toEqual('true');
    };

    this.isInputValueCorrect = function(inputName, value) {
        return expect(inputName.getAttribute('value')).toEqual(value);
    }

    this.clickLogin = function() {
        loginButton.click();
        browser.sleep(2000);        
    };    
  };  

  module.exports = new LoginPage();