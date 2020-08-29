let employeesList = require('../page_objects/employees_list.js');
let employeeForm = require('../page_objects/employee_form.js');
let loginForm = require('../page_objects/login_form.js');
let commonActions = require('../helpers/common_methods.js');
let employee1 = require('../data/employees.json')[0];
let employee2 = require('../data/employees.json')[1];

let fullName1 = commonActions.createEmployeeFullName(employee1.firstName, employee1.lastName);
let fullName2 = commonActions.createEmployeeFullName(employee2.firstName, employee2.lastName);

describe('Add new employee', function() {
    beforeAll(() => {
      loginForm.logInAsAdmin();
    });

    it('Open \"Create employee form\"', function() {
      employeesList.clickCreate();
      employeeForm.isFormOpened();
    });

    it('Before filling out the form, submit button is disabled', function() {
      expect(commonActions.isSubmitButtonDisabled()).toEqual('true');
    });

    it('Cancel filling form', function() {
      employeeForm.fillOutForm(employee2.firstName, employee2.lastName, employee2.startDate, employee2.email);
      employeeForm.checkFormData(employee2.firstName, employee2.lastName, employee2.startDate, employee2.email);
      employeeForm.clickCancel();
      employeesList.checkIfListDoesNotContainEmployeeName(fullName2);
    });

    it('Fill \"Create employee form\"', function() {
      employeesList.clickCreate();
      employeeForm.fillOutForm(employee1.firstName, employee1.lastName, employee1.startDate, employee1.email);
      employeeForm.checkFormData(employee1.firstName, employee1.lastName, employee1.startDate, employee1.email);
    });

    it('Add new employee', function() {
      commonActions.submitForm();
      employeesList.checkIfListContainsEmployeeName(fullName1);
    });
  });

