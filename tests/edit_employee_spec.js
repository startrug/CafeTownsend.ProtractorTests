let employeesList = require('../page_objects/employees_list.js');
let employeeForm = require('../page_objects/employee_form.js');
let loginForm = require('../page_objects/login_form.js');
let employeeToEdit = require('../data/employees.json')[2];
let updatedEmployee = require('../data/employees.json')[3];
let common_methods = require('../helpers/common_methods');

let employeeToEditFullName = common_methods.createEmployeeFullName(employeeToEdit.firstName, employeeToEdit.lastName);
let updatedEmployeeFullName = common_methods.createEmployeeFullName(updatedEmployee.firstName, updatedEmployee.lastName);

describe('Employee edit tests: ', () => {
    beforeAll(() => {
      loginForm.logInAsAdmin();
    });

    afterAll(() => {
      employeesList.selectEmployee(updatedEmployeeFullName);
      employeesList.clickDelete();
      let alert = employeesList.waitForAlertAndGetIt();
      alert.accept();
      employeesList.logOut();
    });

    describe('When admin is logged in and no employee is selected', () => {
      it('Then \"Edit\" button should be disabled', () => {
        employeesList.isEditButtonDisabled();
      });
    });

    describe('When new employee has been created and \"Edit\" button has been clicked', () => {
      beforeAll(() => {
        employeesList.clickCreate();
        employeeForm.fillOutForm(employeeToEdit.firstName, employeeToEdit.lastName, employeeToEdit.startDate, employeeToEdit.email);
        common_methods.submitForm();
        employeesList.selectEmployee(employeeToEditFullName);
        employeesList.clickEdit();
      });
      afterAll(() => {
        employeeForm.clickBack();
      });
      it('Then employee form is opened', () => {
        employeeForm.isOpened();
      });
      it('Then correct data in inputs should be displayed', () => {
        employeeForm.checkFormData(employeeToEdit.firstName, employeeToEdit.lastName, employeeToEdit.startDate, employeeToEdit.email);
      })
    });

    describe('When random input field is empty', () => {
      beforeAll(() => {
        employeesList.selectEmployee(employeeToEditFullName);
        employeesList.clickEdit();
        employeeForm.clearRandomInputData();
      });
      afterAll(() => {
        employeeForm.clickBack();
      });
      it('Then clicking update has no effect', () => {
        common_methods.submitForm()
        employeeForm.isOpened();
      });
    });

    describe('When the employee to edit has been selected and employee form has been updated', () => {
      beforeAll(() => {
        employeesList.selectEmployee(employeeToEditFullName);
        employeesList.clickEdit();
        employeeForm.updateFormData(updatedEmployee.firstName, updatedEmployee.lastName, updatedEmployee.startDate, updatedEmployee.email);
      });
      it('Then input fields should contain correct data', () => {
        employeeForm.checkFormData(updatedEmployee.firstName, updatedEmployee.lastName, updatedEmployee.startDate, updatedEmployee.email);
      });
    });

    describe('When the employee form has been updated correctly and submitted', () => {
      beforeAll(() => {
        common_methods.submitForm();
      });
      it('Then updated employee name should be visible on the list', () => {
        employeesList.checkIfListContainsEmployeeName(updatedEmployeeFullName);
      });
      it('Then previous employee name should not be visible on the list', () => {
        employeesList.checkIfListDoesNotContainEmployeeName(employeeToEditFullName);
      });
    });
  });