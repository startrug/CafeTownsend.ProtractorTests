let EmployeesList = function() {    
    let greetings = $('[id="greetings"]');
    let logOutButton = $('[ng-click="logout()"]');
    let createButton = $('[ng-click="createEmployee()"]');
    let editButton = $('[ng-click="editEmployee()"]');
    let deleteButton = $('[ng-click="deleteEmployee()"]');

    this.isGreetingsDisplayed = function() {
        return expect(greetings.isPresent()).toBe(true);      
    }

    this.hasGreetingsCorrectText = function(username) {
        return expect(greetings.getText()).toEqual('Hello ' + username);
    }

    this.isEditButtonDisabled = function() {
        return expect(editButton.getAttribute('ng-class')).toContain('disabled');        
    };

    this.isDeleteButtonDisabled = function() {
        return expect(deleteButton.getAttribute('ng-class')).toContain('disabled');
    };  
    
    this.isEmployeesListDisplayed = function() {
        let employeesList = element.all(by.repeater('employee in employees'));        
        
        return expect(employeesList.count()).not.toEqual(0);
    }

    this.clickCreate = function() {
        createButton.click();
    }

    this.logOut = function() {
        logOutButton.click();
    }
}

module.exports = new EmployeesList();