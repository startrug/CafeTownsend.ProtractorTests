let loginForm = require('../page_objects/login_form');
let employeesList = require('../page_objects/employees_list.js');
let employeeToDelete = require('../data/employees.json')[0];
let createEmployeeFullName = require('../helpers/common_methods').createEmployeeFullName;

let fullName = createEmployeeFullName(employeeToDelete.firstName, employeeToDelete.lastName);

describe('Delete selected employee', function() {
    beforeAll(() => {
        loginForm.logInAsAdmin();
    });

    it('Select employee to delete', function() {
        employeesList.selectEmployee(fullName);
    });

    it('Cancel removing employee', function() {
        employeesList.clickDelete();

        let alert = employeesList.waitForAlertAndGetIt();

        employeesList.CheckIfAlertContainsExpectedText(alert, fullName);
        alert.dismiss();

        employeesList.checkIfListContainsEmployeeName(fullName);
    });

    it('Delete employee', function() {
        employeesList.selectEmployee(fullName);
        employeesList.clickDelete();

        let alert = employeesList.waitForAlertAndGetIt();
        employeesList.CheckIfAlertContainsExpectedText(alert, fullName);
        alert.accept();

        employeesList.logOut();
    });
  });

  describe('Check if employee has been deleted', function() {
    beforeAll(() => {
        loginForm.logInAsAdmin();
    });

      it('Check if list does not contain employee name', function() {
        employeesList.checkIfListDoesNotContainEmployeeName(fullName);
      });
  });