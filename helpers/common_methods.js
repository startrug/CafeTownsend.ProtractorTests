let CommonMethods = function() {
    let submitButton = $('[class="main-button"][type="submit"]');

    this.isInputValueCorrect = function(inputName, value) {
        return expect(inputName.getAttribute('value')).toEqual(value);
    };

    this.submitForm = function() {
        submitButton.click();
        browser.sleep(2000);
    };

    this.isSubmitButtonDisabled = function() {
        return submitButton.getAttribute('ng-disabled');
    };

    this.createEmployeeFullName = function(firstName, lastName) {
        return firstName.concat(' ', lastName);
    };
}

module.exports = new CommonMethods();