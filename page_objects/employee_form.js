let EmployeeForm = function() {
    let formLocator = $('form[name="employeeForm"]');

    this.setFirstName = function(firstName) {
        firstNameInput = element(by.model('selectedEmployee.firstName'));
        firstNameInput.sendKeys(firstName);
    };

    this.setLastName = function(lastName) {
        lastNameInput = element(by.model('selectedEmployee.lastName'));
        lastNameInput.sendKeys(lastName);
    };

    this.setStartDate = function(date) {
        startDateInput = element(by.model('selectedEmployee.startDate'));
        startDateInput.sendKeys(date);
    };

    this.setEmail = function(email) {
        emailInput = element(by.model('selectedEmployee.email'));
        emailInput.sendKeys(email);
    };

    this.isFormOpened = function() {
        return expect(formLocator.isPresent()).toBe(true);
    };
}

module.exports = new EmployeeForm();