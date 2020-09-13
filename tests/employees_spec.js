let loginForm = require('../page_objects/login_form.js');
let employeesList = require('../page_objects/employees_list.js');
let admin = require('../data/users.json').admin;

describe('When user is logged in as admin', function() {
  beforeAll(() => {
    loginForm.logInAsAdmin();
  });

  it('then greetings should be displayed', function() {
    employeesList.isGreetingsDisplayed();
  });

  it('then greetings text should be correct', function() {
    employeesList.hasGreetingsCorrectText(admin.name);
  });

  it('then employees list should be displayed', function() {
    employeesList.isEmployeesListDisplayed();
  });

  it('then expected buttons should be disabled', function() {
    employeesList.isEditButtonDisabled();
    employeesList.isDeleteButtonDisabled();
  });
});

describe('When \"Logout\" button is clicked', function() {
  beforeAll(() => {
    employeesList.logOut();
  });

  it('then login form should be opened', function() {
    loginForm.isLoginFormOpened();
  });
});
