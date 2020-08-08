let EmployeeForm = function() {
    let formLocator = $('form[name="employeeForm"]');    

    this.setFirstName = function(name) {
        let firstNameInput = element(by.model('selectedEmployee.firstName'));
        firstNameInput.sendKeys(name);
    };

    this.setLastName = function(name) {
        let firstNameInput = element(by.model('selectedEmployee.lastName'));
        firstNameInput.sendKeys(name);
    };

    this.setStartDate = function(name) {
        let firstNameInput = element(by.model('selectedEmployee.startDate'));
        firstNameInput.sendKeys(name);
    };

    this.setEmail = function(name) {
        let firstNameInput = element(by.model('selectedEmployee.email'));
        firstNameInput.sendKeys(name);
    };

    this.isFormOpened = function() {
        return expect(formLocator.isPresent()).toBe(true);
    }
}

module.exports = new EmployeeForm();