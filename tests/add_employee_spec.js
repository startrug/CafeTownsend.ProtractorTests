let employeesList = require('../page_objects/employees_list.js');
let employeeForm = require('../page_objects/employee_form.js');
let loginForm = require('../page_objects/login_form.js');
let commonMethods = require('../helpers/common_methods.js');
let employee1 = require('../data/employees.json')[0];
let employee2 = require('../data/employees.json')[1];

let fullName1 = commonMethods.createEmployeeFullName(employee1.firstName, employee1.lastName);
let fullName2 = commonMethods.createEmployeeFullName(employee2.firstName, employee2.lastName);

describe('When user is logged in as admin and clicks \"Create\" button', function() {
  beforeAll(() => {
    loginForm.logInAsAdmin();
    employeesList.clickCreate();
  });

  it('then \"Create employee form\" should be opened', function() {
    employeeForm.isOpened();
  });

  it('then submit button in form should be disabled', function() {
    expect(commonMethods.isSubmitButtonDisabled()).toEqual('true');
  });
});

describe('When user filled out form', function() {
  beforeAll(() => {
    employeeForm.fillOutForm(employee2.firstName, employee2.lastName, employee2.startDate, employee2.email);
  });

  it('then input fields should contain correct data', function() {
    employeeForm.checkFormData(employee2.firstName, employee2.lastName, employee2.startDate, employee2.email);
  });
});

describe('When user click \"Cancel\" button in form', function() {
  beforeAll(() => {
    employeeForm.clickCancel();
  });

  it('then employees list should not contain employee full name', function() {
    employeesList.checkIfListDoesNotContainEmployeeName(fullName2);
  });
});

describe('When user filled out form and submit it', function() {
  beforeAll(() => {
    employeesList.clickCreate();
    employeeForm.fillOutForm(employee1.firstName, employee1.lastName, employee1.startDate, employee1.email);
    commonMethods.submitForm();
  });

  it('then employees list should contain employee full name', function() {
    employeesList.checkIfListContainsEmployeeName(fullName1);
  });
});


