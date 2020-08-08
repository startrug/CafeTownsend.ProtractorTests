let loginPage = require('../page_objects/login_page.js');
let data = require('../data/test_data.json')

describe('Open page and fill out login form', function() {
    it('Website should have expected title', function() {      
      loginPage.get();
      loginPage.hasCorrectTitle(data.page.title);      
    });

    it('Before fill out login form, \"Login\" button is disabled', function() {      
      expect(loginPage.isLoginButtonDisabled()).toEqual('true');      
    });

    it('Set correct user login', function() {
      loginPage.enterUserName(data.user.name);  
      loginPage.isInputValueCorrect(userNameInput, data.user.name)            
    });

    it('Set correct user password', function() {
      loginPage.enterUserPassword(data.user.password);     
      loginPage.isInputValueCorrect(userPasswordInput, data.user.password);     
    });

    it('After entering credentials login button is enabled', function() {     
      expect(loginPage.isLoginButtonDisabled()).toEqual('false');
    });    
  });