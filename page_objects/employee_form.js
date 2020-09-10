let commonActions = require('../helpers/common_methods.js');

function EmployeeForm() {
    let formLocator = $('form[name="employeeForm"]');

    this.setFirstName = (firstName) => {
        firstNameInput = element(by.model('selectedEmployee.firstName'));
        firstNameInput.sendKeys(firstName);
    };

    this.setLastName = (lastName) => {
        lastNameInput = element(by.model('selectedEmployee.lastName'));
        lastNameInput.sendKeys(lastName);
    };

    this.setStartDate = (date) => {
        startDateInput = element(by.model('selectedEmployee.startDate'));
        startDateInput.sendKeys(date);
    };

    this.setEmail = (email) => {
        emailInput = element(by.model('selectedEmployee.email'));
        emailInput.sendKeys(email);
    };

    this.isOpened = () => {
        return expect(formLocator.isPresent()).toBe(true);
    };

    this.fillOutForm = (firstName, lastName, startDate, email) => {
        this.setFirstName(firstName);
        this.setLastName(lastName);
        this.setStartDate(startDate);
        this.setEmail(email);
    };

    this.checkFormData = (firstName, lastName, startDate, email) => {
        commonActions.isInputValueCorrect(firstNameInput, firstName);
        commonActions.isInputValueCorrect(lastNameInput, lastName);
        commonActions.isInputValueCorrect(startDateInput, startDate);
        commonActions.isInputValueCorrect(emailInput, email);
    };

    this.clickCancel = () => {
        $('.bCancel').click();
    };

    this.clickBack = () => {
        $('.bBack').click();
    };

    this.updateFormData = (newFirstName, newLastName, newStartDate, newEmail) => {
        let inputs = [firstNameInput, lastNameInput, startDateInput, emailInput];
        inputs.forEach(i => {
            i.clear();
        });
        this.fillOutForm(newFirstName, newLastName, newStartDate, newEmail);
    };

    this.updateEmail = (newEmail) => {
        emailInput.clear();
        this.setEmail(newEmail);
    };

    this.clearRandomInputData = () => {
        let inputs = [firstNameInput, lastNameInput, startDateInput, emailInput];
        let randomInputIdx = Math.floor(Math.random() * inputs.length);
        inputs[randomInputIdx].clear();
    };
}

module.exports = new EmployeeForm();