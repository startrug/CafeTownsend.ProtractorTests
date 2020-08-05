let loginPage = require('../page_objects/login_page.js');
let pageAfterLoggingIn = require('../page_objects/page_after_logging_in.js');
let data = require('../data/test_data.json');

describe('Page after logging in tests', function() {
    beforeAll(() => {
        loginPage.get();
        loginPage.enterUserName(data.user.name);
        loginPage.enterUserPassword(data.user.password);
        loginPage.clickLogin();
    });
    
    it('Is greetings displayed after logging in', function() {  
        pageAfterLoggingIn.isGreetingsDisplayed();
        pageAfterLoggingIn.hasGreetingsCorrectText(data.user.name);      
      });

    it('User can log out', function() {            
      pageAfterLoggingIn.logOut();            
    });
});