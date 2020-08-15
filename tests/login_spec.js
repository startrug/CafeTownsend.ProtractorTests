let loginForm = require('../page_objects/login_form.js');
let admin = require('../data/users.json').admin;
let pageTitle = require('../data/page_info.json').title;
let isInputValueCorrect = require('../helpers/common_methods.js').isInputValueCorrect;

describe('Open page and fill out login form', function() {
    it('Website should have expected title', function() {
      loginForm.get();
      loginForm.hasCorrectTitle(pageTitle);
    });

    it('Before fill out login form, \"Login\" button is disabled', function() {
      expect(loginForm.isLoginButtonDisabled()).toEqual('true');
    });

    it('Set correct user login', function() {
      loginForm.enterUserName(admin.name);
      isInputValueCorrect(userNameInput, admin.name)
    });

    it('Set correct user password', function() {
      loginForm.enterUserPassword(admin.password);
      isInputValueCorrect(userPasswordInput, admin.password)
    });

    it('After entering credentials login button is enabled', function() {
      expect(loginForm.isLoginButtonDisabled()).toEqual('false');
    });
  });