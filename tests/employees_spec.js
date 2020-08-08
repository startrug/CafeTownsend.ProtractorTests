let loginPage = require('../page_objects/login_page.js');
let employeesPage = require('../page_objects/employees_page.js');
let employeeForm = require('../page_objects/employee_form.js')
let data = require('../data/test_data.json');

describe('Open employees list page', function() {
  beforeAll(() => {
    loginToPage();
  });
    
  it('Is greetings displayed after logging in', function() {  
    employeesPage.isGreetingsDisplayed();
    employeesPage.hasGreetingsCorrectText(data.user.name);      
  });

  it('Is employees list displayed', function() {  
    employeesPage.isEmployeesListDisplayed();          
  });

  it('Are expected buttons disabled in employee form before fill it out', function() {
    employeesPage.isEditButtonDisabled();
    employeesPage.isDeleteButtonDisabled();       
  });

  it('Log out', function() {            
    employeesPage.logOut();
    loginPage.isLoginFormOpened();            
  });
});

describe('Create new employee', function() {
  beforeAll(() => {
    loginToPage();
  });

  it('Open \"Create employee form\"', function() {
    employeesPage.clickCreate();
    employeeForm.isFormOpened();
  });
});

loginToPage = function() {
  loginPage.get();
  loginPage.enterUserName(data.user.name);
  loginPage.enterUserPassword(data.user.password);
  loginPage.clickLogin();
}