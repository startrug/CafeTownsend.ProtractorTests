const userName = 'Luke';
const userPassword = 'Skywalker'
const expectedPageTitle = 'CafeTownsend-AngularJS-Rails';

let loginPage = require('../page_objects/login_page.js');
let pageAfterLoggingIn = require('../page_objects/page_after_logging_in.js');

describe('CafeTownsend-AngularJS-Rails First Test', function() {
    it('website should have expected title', function() {      
      loginPage.get();
      loginPage.hasCorrectTitle(expectedPageTitle);      
    });

    it('Before fill out login form, \"Login\" button is disabled', function() {      
      loginPage.isLoginButtonDisabled();      
    });

    it('User can enter login', function() {
      loginPage.enterUserName(userName);  
      loginPage.isInputValueCorrect(userNameInput, userName)            
    });

    it('User can enter password', function() {
      loginPage.enterUserPassword(userPassword);     
      loginPage.isInputValueCorrect(userPasswordInput, userPassword);     
    });

    it('User can log in', function() {     
      loginPage.clickLogin();

      pageAfterLoggingIn.isGreetingsDisplayed();
      pageAfterLoggingIn.hasGreetingsCorrectText(userName);      
    });

    it('user can log out', function() {            
      pageAfterLoggingIn.logOut();            
    });
  });