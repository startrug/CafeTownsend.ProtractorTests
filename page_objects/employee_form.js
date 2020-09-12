let commonMethods = require('../helpers/common_methods.js');

function EmployeeForm() {
    let formLocator = $('form[name="employeeForm"]');
    let firstNameInput = element(by.model('selectedEmployee.firstName'));
    let lastNameInput = element(by.model('selectedEmployee.lastName'));
    let startDateInput = element(by.model('selectedEmployee.startDate'));
    let emailInput = element(by.model('selectedEmployee.email'));

    this.setFirstName = (firstName) => firstNameInput.sendKeys(firstName);

    this.setLastName = (lastName) => lastNameInput.sendKeys(lastName);

    this.setStartDate = (date) => startDateInput.sendKeys(date);

    this.setEmail = (email) => emailInput.sendKeys(email);

    this.isOpened = () => expect(formLocator.isPresent()).toBe(true);

    this.fillOutForm = (firstName, lastName, startDate, email) => {
        this.setFirstName(firstName);
        this.setLastName(lastName);
        this.setStartDate(startDate);
        this.setEmail(email);
    };

    this.checkFormData = (firstName, lastName, startDate, email) => {
        commonMethods.isInputValueCorrect(firstNameInput, firstName);
        commonMethods.isInputValueCorrect(lastNameInput, lastName);
        commonMethods.isInputValueCorrect(startDateInput, startDate);
        commonMethods.isInputValueCorrect(emailInput, email);
    };

    this.clickCancel = () => $('.bCancel').click();

    this.clickBack = () => $('.bBack').click();

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