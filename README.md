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
- [helpers](helpers)
- [page_objects](page_objects)
- [tests](tests) -  sets of tests for main functionalities of website

## Project features

## Getting started

## Running tests

## Generating reports

## What's next?