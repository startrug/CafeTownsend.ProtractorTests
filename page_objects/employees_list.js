let EC = protractor.ExpectedConditions;

let EmployeesList = function() {
    let greetings = $('[id="greetings"]');
    let editButton = $('#bEdit');
    let deleteButton = $('#bDelete');

    this.isGreetingsDisplayed = function() {
        return expect(greetings.isPresent()).toBe(true);
    };

    this.hasGreetingsCorrectText = function(username) {
        return expect(greetings.getText()).toEqual('Hello ' + username);
    };

    this.isEditButtonDisabled = function() {
        return expect(editButton.getAttribute('class')).toContain('disabled');
    };

    this.isDeleteButtonDisabled = function() {
        return expect(deleteButton.getAttribute('class')).toContain('disabled');
    };

    this.isEmployeesListDisplayed = function() {
        let employeesList = element.all(by.repeater('employee in employees'));

        return expect(employeesList.count()).not.toEqual(0);
    };

    this.clickCreate = function() {
        $('#bAdd').click();
    };

    this.logOut = function() {
        $('[ng-click="logout()"]').click();
    };

    this.checkIfListContainsEmployeeName = function(name) {
        let employeesList = element.all(by.repeater('employee in employees'));
        expect(employeesList.getText()).toContain(name);
    };

    this.checkIfListDoesNotContainEmployeeName = function(name) {
        let employeesList = element.all(by.repeater('employee in employees'));
        expect(employeesList.getText()).not.toContain(name);
    };

    this.selectEmployee = function(name) {
        let employeeToDelete = element(by.cssContainingText('.ng-binding', name));
        employeeToDelete.click();
    };

    this.clickDelete = function() {
        deleteButton.click();
    };

    this.clickEdit = function() {
        editButton.click();
    };

    this.CheckIfAlertContainsExpectedText = function(alert, employeeName) {
        expect(alert.getText()).toEqual('Are you sure you want to delete '.concat(employeeName, '?'));
    };

    this.waitForAlertAndGetIt = function() {
        browser.wait(EC.alertIsPresent(), 5000);

        return browser.switchTo().alert();
    };
}

module.exports = new EmployeesList();