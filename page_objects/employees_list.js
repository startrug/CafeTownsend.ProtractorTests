let EC = protractor.ExpectedConditions;

function EmployeesList() {
    let greetings = $('[id="greetings"]');
    let editButton = $('#bEdit');
    let deleteButton = $('#bDelete');

    this.isGreetingsDisplayed = () => expect(greetings.isPresent()).toBe(true);

    this.hasGreetingsCorrectText = (username) => expect(greetings.getText()).toEqual('Hello ' + username);

    this.isEditButtonDisabled = () => expect(editButton.getAttribute('class')).toContain('disabled');

    this.isDeleteButtonDisabled = () => expect(deleteButton.getAttribute('class')).toContain('disabled');

    this.isEmployeesListDisplayed = () => expect(getEmployeesList().count()).not.toEqual(0);

    this.clickCreate = () => $('#bAdd').click();

    this.logOut = () => $('[ng-click="logout()"]').click();

    this.clickEdit = () => editButton.click();

    this.checkIfListContainsEmployeeName = (name) => expect(getEmployeesList().getText()).toContain(name);

    this.checkIfListDoesNotContainEmployeeName = (name) => expect(getEmployeesList().getText()).not.toContain(name);

    this.deleteSelectedEmployee = (name) => {
        select(name);
        clickDelete();
    };

    this.selectEmployee = (name) => {
        let employeeToDelete = element(by.cssContainingText('.ng-binding', name));
        employeeToDelete.click();
    };

    this.CheckIfAlertContainsExpectedText = (alert, employeeName) => {
        expect(alert.getText())
        .toEqual('Are you sure you want to delete '
        .concat(employeeName, '?'));
    };

    this.waitForAlertAndGetIt = () => {
        browser.wait(EC.alertIsPresent(), 5000);

        return browser.switchTo().alert();
    };

    function select(name) {
        let employeeToDelete = element(by.cssContainingText('.ng-binding', name));
        employeeToDelete.click();
    }

    clickDelete = () => deleteButton.click();

    getEmployeesList = () => element.all(by.repeater('employee in employees'));
}

module.exports = new EmployeesList();