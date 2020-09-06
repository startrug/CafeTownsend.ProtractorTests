let employeesList = require('../page_objects/employees_list.js');
let employeeForm = require('../page_objects/employee_form.js');
let loginForm = require('../page_objects/login_form.js');
let employeeToEdit = require('../data/employees.json')[2];
let updatedEmployee = require('../data/employees.json')[3];
let common_methods = require('../helpers/common_methods');

let employeeToEditFullName = common_methods.createEmployeeFullName(employeeToEdit.firstName, employeeToEdit.lastName);
let updatedEmployeeFullName = common_methods.createEmployeeFullName(updatedEmployee.firstName, updatedEmployee.lastName);

describe('Edit employee', function() {
    beforeAll(() => {
      loginForm.logInAsAdmin();
    });

    afterAll(() => {
      employeesList.selectEmployee(updatedEmployeeFullName);
      employeesList.clickDelete();
      let alert = employeesList.waitForAlertAndGetIt();
      alert.accept();
      employeesList.checkIfListDoesNotContainEmployeeName(updatedEmployeeFullName);
      employeesList.logOut();
    });

    it('If no employee is selected, \"Edit\" button is disabled', function() {
      employeesList.isEditButtonDisabled();
    });

    it('Create employee to delete', function() {
      employeesList.clickCreate();
      employeeForm.fillOutForm(employeeToEdit.firstName, employeeToEdit.lastName, employeeToEdit.startDate, employeeToEdit.email);
      common_methods.submitForm();
    });

    it('If edit form is opened, correct data in inputs should be displayed', function() {
      employeesList.selectEmployee(employeeToEditFullName);
      employeesList.clickEdit();
      employeeForm.checkFormData(employeeToEdit.firstName, employeeToEdit.lastName, employeeToEdit.startDate, employeeToEdit.email);
      employeeForm.clickBack();
    });

    it('After updating form, correct data should be displayed', function() {
      employeesList.selectEmployee(employeeToEditFullName);
      employeesList.clickEdit();
      employeeForm.updateFormData(updatedEmployee.firstName, updatedEmployee.lastName, updatedEmployee.startDate, updatedEmployee.email);
      employeeForm.checkFormData(updatedEmployee.firstName, updatedEmployee.lastName, updatedEmployee.startDate, updatedEmployee.email);
      common_methods.submitForm();
    });

    it('After submitting form, updated employee name should be visible on the list', function() {
      employeesList.checkIfListContainsEmployeeName(updatedEmployeeFullName);
    });

    it('After submitting form, edited employee name should not be visible on the list', function() {
      employeesList.checkIfListDoesNotContainEmployeeName(employeeToEditFullName);
    });
  });