let CommonMethods = function() {
    let sumbmitButton = $('[class="main-button"][type="submit"]');

    this.isInputValueCorrect = function(inputName, value) {
        return expect(inputName.getAttribute('value')).toEqual(value);
    };

    this.submitForm = function() {
        sumbmitButton.click();
        browser.sleep(2000);
    };
}

module.exports = new CommonMethods();