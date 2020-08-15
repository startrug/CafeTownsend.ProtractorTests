let employeesList = require('../page_objects/employees_list.js');
let employeeForm = require('../page_objects/employee_form.js');
let loginForm = require('../page_objects/login_form.js');
let commonActions = require('../helpers/common_methods.js');
let employee = require('../data/employees.json')[0];

describe('Add new employee', function() {
    beforeAll(() => {
      loginForm.logInAsAdmin();
    });

    it('Open \"Create employee form\"', function() {
      employeesList.clickCreate();
      employeeForm.isFormOpened();
    });

    it('Fill \"Create employee form\"', function() {
      employeeForm.setFirstName(employee.firstName);
      commonActions.isInputValueCorrect(firstNameInput, employee.firstName);

      employeeForm.setLastName(employee.lastName);
      commonActions.isInputValueCorrect(lastNameInput, employee.lastName);

      employeeForm.setStartDate(employee.startDate);
      commonActions.isInputValueCorrect(startDateInput, employee.startDate);

      employeeForm.setEmail(employee.email);
      commonActions.isInputValueCorrect(emailInput, employee.email);
    });

    it('Add new employee', function() {
      commonActions.submitForm();
      let displayedName = employee.firstName + ' ' + employee.lastName
      employeesList.checkIfEmployeeAdded(displayedName);
    });
  });
