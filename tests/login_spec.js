let loginForm = require('../page_objects/login_form.js');
let users = require('../data/users.json');
let pageInfo = require('../data/page_info.json');

describe('Open page and fill out login form', function() {
    it('Website should have expected title', function() {      
      loginForm.get();
      loginForm.hasCorrectTitle(pageInfo.title);      
    });

    it('Before fill out login form, \"Login\" button is disabled', function() {      
      expect(loginForm.isLoginButtonDisabled()).toEqual('true');      
    });

    it('Set correct user login', function() {
      loginForm.enterUserName(users.admin.name);  
      loginForm.isInputValueCorrect(userNameInput, users.admin.name)            
    });

    it('Set correct user password', function() {
      loginForm.enterUserPassword(users.admin.password);     
      loginForm.isInputValueCorrect(userPasswordInput, users.admin.password);     
    });

    it('After entering credentials login button is enabled', function() {     
      expect(loginForm.isLoginButtonDisabled()).toEqual('false');
    });    
  });