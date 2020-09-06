let commonActions = require('../helpers/common_methods.js');

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

    this.fillOutForm = function(firstName, lastName, startDate, email) {
        this.setFirstName(firstName);
        this.setLastName(lastName);
        this.setStartDate(startDate);
        this.setEmail(email);
    };

    this.checkFormData = function(firstName, lastName, startDate, email) {
        commonActions.isInputValueCorrect(firstNameInput, firstName);
        commonActions.isInputValueCorrect(lastNameInput, lastName);
        commonActions.isInputValueCorrect(startDateInput, startDate);
        commonActions.isInputValueCorrect(emailInput, email);
    };

    this.clickCancel = function() {
        $('.bCancel').click();
    };

    this.clickBack = function() {
        $('.bBack').click();
    };

    this.updateFormData = function(firstName, lastName, startDate, email) {
        let inputs = [firstNameInput, lastNameInput, startDateInput, emailInput];
        inputs.forEach(i => {
            i.clear();
        });
        this.fillOutForm(firstName, lastName, startDate, email);
    }
}

module.exports = new EmployeeForm();