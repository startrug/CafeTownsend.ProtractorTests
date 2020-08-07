let EmployeesPage = function() {    
    let greetings = $('[id="greetings"]');
    let logOutButton = $('[ng-click="logout()"]')

    this.isGreetingsDisplayed = function() {
        return expect(greetings.isPresent()).toBe(true);      
    }

    this.hasGreetingsCorrectText = function(username) {
        return expect(greetings.getText()).toEqual('Hello ' + username);
    }

    this.logOut = function() {
        logOutButton.click();
    }
}

module.exports = new EmployeesPage();