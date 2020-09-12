exports.config = {
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    rootElement: '*[ng-app]',
    specs: [
      '../tests/login_spec.js',
      '../tests/employees_spec.js',
      '../tests/add_employee_spec.js',
      '../tests/delete_employee_spec.js'
    ],
    capabilities: {
      'browserName': 'chrome'
    },
    suites: {
      login: '../tests/login_spec.js',
      list: '../tests/employees_spec.js',
      add: '../tests/add_employee_spec.js',
      delete: '../tests/delete_employee_spec.js',
      edit: '../tests/edit_employee_spec.js',
    },
    framework: 'jasmine',

    onPrepare: function() {
      browser.manage().window().maximize();
      browser.manage().timeouts().implicitlyWait(5000);

      var AllureReporter = require('jasmine-allure-reporter');
      jasmine.getEnv().addReporter(new AllureReporter({
      resultsDir: '../allure-results'
      }));

      jasmine.getEnv().afterEach(function(done) {
        browser.takeScreenshot().then(function (png) {
          allure.createAttachment('Screenshot', function () {
            return new Buffer.from(png, 'base64')
          }, 'image/png')();
          done();
        })
      });
    }
  }