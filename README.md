# Protractor e2e tests training project

This is my first automated testing project using JS and Protractor framework. I prepared some test scenarios for Angular app availaible here: [cafetownsend-angular-rails.herokuapp.com](http://cafetownsend-angular-rails.herokuapp.com).
By this project, I wanted to get essential knowledge about Protractor framework and its capabilities.

## Project structure
- [configuration](configuration) - there is only one file in that directory [conf.js](configuration/conf.js), but is possible to add another configuration file, eg. for CI integration
- [data](data) - in that directory you can find data sets for tests. I prepared 3 files: [employees.json](data/employees.json), [page_info.json](data/page_info.json) and [users.json](data/users.json) for suitable data. It's possible to use data stored in JSON file in simple way, for example:
```
let employees = require('../data/employees.json')
```
if you want to import all data from file - in this case [employees.json](data/employees.json), or:
```
let admin = require('../data/users.json').admin;
```
if you want to import only selected part of data - in this case admin credentials from [users.json](data/users.json)
Now, you have access to imported data sets, for example:
```
this.logInAsAdmin = function() {
        this.get();
        this.enterUserName(admin.name);
        this.enterUserPassword(admin.password);
        submitForm();
    }
  };
  ```
  Notice: the code above is a part of [login_form.js](page_objects/login_form.js). Go to this file for more details.

- [helpers](helpers) - in this directory I stored reusable parts of code to avoid its duplication. There are some methods using in many places, so I decided to place them in [common_methods.js](helpers/common_methods.js). You can import all common methods or one of them and assign it to variable like in examples:
```
// import all common methods and sample of using one of them
let commonActions = require('../helpers/common_methods.js');
expect(commonActions.isSubmitButtonDisabled()).toEqual('true');

// import selected method and sample of using it
let createEmployeeFullName = require('../helpers/common_methods').createEmployeeFullName;
let fullName = createEmployeeFullName(employeeToDelete.firstName, employeeToDelete.lastName);
```
- [page_objects](page_objects)
- [tests](tests) -  sets of tests for main functionalities of website

## Project features

## Getting started

## Running tests

## Generating reports

## What's next?