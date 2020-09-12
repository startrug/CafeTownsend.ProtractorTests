let loginForm = require('../page_objects/login_form');
let employeesList = require('../page_objects/employees_list.js');
let employeeToDelete = require('../data/employees.json')[0];
let createEmployeeFullName = require('../helpers/common_methods').createEmployeeFullName;

let fullName = createEmployeeFullName(employeeToDelete.firstName, employeeToDelete.lastName);

describe('When user is logged in as admin', function() {
    beforeAll(() => {
        loginForm.logInAsAdmin();
    });

    it('then no employee is selected and \"Delete\" button is disabled', function() {
        employeesList.isDeleteButtonDisabled();
    });
});

describe('When selected employee\'s removal has been canceled', function() {
    beforeAll(() => {
        deleteSelectedEmployee(fullName);
    });

    it('then browser alert should contain proper message', function() {
        let alert = employeesList.waitForAlertAndGetIt();
        employeesList.CheckIfAlertContainsExpectedText(alert, fullName);
        alert.dismiss();

        employeesList.checkIfListContainsEmployeeName(fullName);
    });

    it('then, after alert dismissed, employees list should still contain employee full name', function() {
        alert.dismiss();
        employeesList.checkIfListContainsEmployeeName(fullName);
    });
});

describe('When selected employee is removed and admin is logged in again', function() {
    beforeAll(() => {
        deleteSelectedEmployee(fullName);
        let alert = employeesList.waitForAlertAndGetIt();
        alert.accept();
        employeesList.logOut();
        loginForm.logInAsAdmin();
    });

    it('then should not contain removed employee full name', function() {
        employeesList.checkIfListDoesNotContainEmployeeName(fullName);
    });
});

  function deleteSelectedEmployee(name) {
    employeesList.selectEmployee(name);
    employeesList.clickDelete();
  }