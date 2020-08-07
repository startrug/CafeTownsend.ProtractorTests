let loginPage = require('../page_objects/login_page.js');
let employeesPage = require('../page_objects/employees_page.js');
let data = require('../data/test_data.json');

describe('Page after logging in tests', function() {
    beforeAll(() => {
        loginPage.get();
        loginPage.enterUserName(data.user.name);
        loginPage.enterUserPassword(data.user.password);
        loginPage.clickLogin();
    });
    
    it('Is greetings displayed after logging in', function() {  
        employeesPage.isGreetingsDisplayed();
        employeesPage.hasGreetingsCorrectText(data.user.name);      
      });

    it('User can log out', function() {            
      employeesPage.logOut();            
    });
});