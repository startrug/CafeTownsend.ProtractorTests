let employeesList = require('../page_objects/employees_list.js');
let employeeForm = require('../page_objects/employee_form.js');
let loginForm = require('../page_objects/login_form.js');
let employees = require('../data/employees.json');

describe('Add new employee', function() {
    beforeAll(() => {
      loginForm.logInAsAdmin();
    });
    
    it('Open \"Create employee form\"', function() {
      employeesList.clickCreate();
      employeeForm.isFormOpened();
    });

    it('Fill \"Create employee form\"', function() {
        employeeForm.setFirstName(employees[0].firstName);
        employeeForm.setLastName(employees[0].lastName);
        employeeForm.setStartDate(employees[0].startDate)
        employeeForm.setEmail(employees[0].email)
    });
  }); 
  