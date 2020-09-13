let employeesList = require('../page_objects/employees_list.js');
let employeeForm = require('../page_objects/employee_form.js');
let loginForm = require('../page_objects/login_form.js');
let employeeToEdit = require('../data/employees.json')[2];
let updatedEmployee = require('../data/employees.json')[3];
let commonMethods = require('../helpers/common_methods');

let employeeToEditFullName = commonMethods.createEmployeeFullName(employeeToEdit.firstName, employeeToEdit.lastName);
let updatedEmployeeFullName = commonMethods.createEmployeeFullName(updatedEmployee.firstName, updatedEmployee.lastName);

describe('When user is logged in as admin and no employee is selected', () => {
  beforeAll(() => {
    loginForm.logInAsAdmin();
  });

  it('then \"Edit\" button should be disabled', () => {
    employeesList.isEditButtonDisabled();
  });
});

describe('When new employee has been created and \"Edit\" button has been clicked', () => {
  beforeAll(() => {
    employeesList.clickCreate();
    employeeForm.fillOutForm(employeeToEdit.firstName, employeeToEdit.lastName, employeeToEdit.startDate, employeeToEdit.email);
    commonMethods.submitForm();
    selectEmployeeAndEdit(employeeToEditFullName);
  });

  afterAll(() => {
    employeeForm.clickBack();
  });

  it('then employee form is opened', () => {
    employeeForm.isOpened();
  });

  it('then correct data in inputs should be displayed', () => {
    employeeForm.checkFormData(employeeToEdit.firstName, employeeToEdit.lastName, employeeToEdit.startDate, employeeToEdit.email);
  })
});

describe('When random input field is empty', () => {
  beforeAll(() => {
    selectEmployeeAndEdit(employeeToEditFullName);
    employeeForm.clearRandomInputData();
  });

  afterAll(() => {
    employeeForm.clickBack();
  });

  it('then clicking update should have no effect', () => {
    commonMethods.submitForm()
    employeeForm.isOpened();
  });
});

describe('When updated email has no correct format', () => {
  beforeAll(() => {
    selectEmployeeAndEdit(employeeToEditFullName);
    employeeForm.updateEmail('abc123');
  });

  afterAll(() => {
    employeeForm.clickBack();
  });

  it('then clicking update should have no effect', () => {
    commonMethods.submitForm();
    employeeForm.isOpened();
  });
});

describe('When the employee to edit has been selected and employee form has been updated', () => {
  beforeAll(() => {
    selectEmployeeAndEdit(employeeToEditFullName);
    employeeForm.updateFormData(updatedEmployee.firstName, updatedEmployee.lastName, updatedEmployee.startDate, updatedEmployee.email);
  });
  it('then input fields should contain correct data', () => {
    employeeForm.checkFormData(updatedEmployee.firstName, updatedEmployee.lastName, updatedEmployee.startDate, updatedEmployee.email);
  });
});

describe('When the employee form has been updated correctly and submitted', () => {
  beforeAll(() => {
    commonMethods.submitForm();
  });

  afterAll(() => {
    employeesList.deleteSelectedEmployee(updatedEmployeeFullName);

    let alert = employeesList.waitForAlertAndGetIt();
    alert.accept();
    employeesList.logOut();
  });

  it('then updated employee name should be visible on the list', () => {
    employeesList.checkIfListContainsEmployeeName(updatedEmployeeFullName);
  });
  it('Then previous employee name should not be visible on the list', () => {
    employeesList.checkIfListDoesNotContainEmployeeName(employeeToEditFullName);
  });
});

function selectEmployeeAndEdit(name) {
  employeesList.selectEmployee(name);
  employeesList.clickEdit();
}