![Last commit](https://img.shields.io/github/last-commit/startrug/CafeTownsend.ProtractorTests?color=9cf&logo=git)
![GitHub top language](https://img.shields.io/github/languages/top/startrug/CafeTownsend.ProtractorTests?color=blue)

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
example of import all common methods and using one of them
```
let commonActions = require('../helpers/common_methods.js');
expect(commonActions.isSubmitButtonDisabled()).toEqual('true');
```
example of import selected method and using it
```
let createEmployeeFullName = require('../helpers/common_methods').createEmployeeFullName;
let fullName = createEmployeeFullName(employeeToDelete.firstName, employeeToDelete.lastName);
```
- [page_objects](page_objects) - page objects into which the has been divided. Some instructions for basic usage Page Object pattern in Protractor you can find here: [protractortest.org/#/page-objects](https://www.protractortest.org/#/page-objects)
- [tests](tests) -  sets of tests for main functionalities of application. Tests have been divided for 5 specs:
  - logging in to app:
    - [login_spec.js](tests/login_spec.js),
  - functionalities of employees list and forms (add & edit forms have the same input fields):
    - [employees_spec.js](tests/employees_spec.js),
    - [add_employee_spec.js](tests/add_employee_spec.js),
    - [edit_employee_spec.js](tests/edit_employee_spec.js),
    - [delete_employee_spec.js](tests/delete_employee_spec.js)

## Project features
- framework follows page object pattern
- data-driven tests - test data is loading from json files (see: [Project structure](README.md#Project-structure))
- easy to generating and attractive reports in Allure with screenshots and nice charts

## Getting started
Basic informations about Protractor setup, configuration and writing first test are availaible here: [protractor.org](https://www.protractortest.org/#/)

## Running tests
For run all tests just open command line in /configuration directory and type command:
```
protractor conf.js
```
If you want to run specific suites of tests you can use command:
```
protractor conf.js --suite login_tests, create_employee_tests
```

## Generating reports
After tests run allure-results directory should be saved in main project catalog. For genereting Allure report just open command line in main project directory and use command:
```
allure serve
```
Report will be generated in few seconds and opened in your default browser.

The tests report might look like this:
![Allure report screenshot](https://github.com/startrug/CafeTownsend.ProtractorTests/blob/master/readme_screenshots/sample_report.png?raw=true)

## What's next?
This simple, training project is still developing. I want to add more scenarios and test cases and refactor a bit existing code and maybe modify project structure :blush: