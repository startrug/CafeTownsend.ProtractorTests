let loginForm = require('../page_objects/login_form.js');
let employeesList = require('../page_objects/employees_list.js');
let admin = require('../data/users.json').admin;

describe('Open employees list page', function() {
  beforeAll(() => {
    loginForm.logInAsAdmin();
  });

  it('Is greetings displayed after logging in', function() {
    employeesList.isGreetingsDisplayed();
    employeesList.hasGreetingsCorrectText(admin.name);
  });

  it('Is employees list displayed', function() {
    employeesList.isEmployeesListDisplayed();
  });

  it('Are expected buttons disabled in employee form before fill it out', function() {
    employeesList.isEditButtonDisabled();
    employeesList.isDeleteButtonDisabled();
  });

  it('Log out', function() {
    employeesList.logOut();
    loginForm.isLoginFormOpened();
  });
});