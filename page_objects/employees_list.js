let EC = protractor.ExpectedConditions;

function EmployeesList() {
    let greetings = $('[id="greetings"]');
    let editButton = $('#bEdit');
    let deleteButton = $('#bDelete');

    this.isGreetingsDisplayed = () => expect(greetings.isPresent()).toBe(true);

    this.hasGreetingsCorrectText = (username) => expect(greetings.getText()).toEqual('Hello ' + username);

    this.isEditButtonDisabled = () => expect(editButton.getAttribute('class')).toContain('disabled');

    this.isDeleteButtonDisabled = () => expect(deleteButton.getAttribute('class')).toContain('disabled');

    this.isEmployeesListDisplayed = () => {
        let employeesList = element.all(by.repeater('employee in employees'));

        return expect(employeesList.count()).not.toEqual(0);
    };

    this.clickCreate = () => $('#bAdd').click();

    this.logOut = () => $('[ng-click="logout()"]').click();

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

    this.clickDelete = () => deleteButton.click();

    this.clickEdit = () => editButton.click();

    this.CheckIfAlertContainsExpectedText = (alert, employeeName) => {
        expect(alert.getText()).toEqual('Are you sure you want to delete '.concat(employeeName, '?'));
    };

    this.waitForAlertAndGetIt = function() {
        browser.wait(EC.alertIsPresent(), 5000);

        return browser.switchTo().alert();
    };
}

module.exports = new EmployeesList();