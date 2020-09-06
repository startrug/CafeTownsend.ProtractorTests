let employeesList = require('../page_objects/employees_list.js');
let employeeForm = require('../page_objects/employee_form.js');
let loginForm = require('../page_objects/login_form.js');
let employeeToEdit = require('../data/employees.json')[2];
let common_methods = require('../helpers/common_methods');

let fullName = common_methods.createEmployeeFullName(employeeToEdit.firstName, employeeToEdit.lastName);

describe('Edit employee', function() {
    beforeAll(() => {
      loginForm.logInAsAdmin();
    });

    afterAll(() => {
      employeesList.selectEmployee(fullName);
      employeesList.clickDelete();
      let alert = employeesList.waitForAlertAndGetIt();
      alert.accept();
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
      employeesList.selectEmployee(fullName);
      employeesList.clickEdit();
      employeeForm.checkFormData(employeeToEdit.firstName, employeeToEdit.lastName, employeeToEdit.startDate, employeeToEdit.email);
      employeeForm.clickBack();
    });
  });