var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

var reporter = new HtmlScreenshotReporter({
  dest: 'reports/screenshots_and_reports',
  filename: 'test_report.html'
});

exports.config = {
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    rootElement: '*[ng-app]',
    specs: ['../tests/login_spec.js'],    
    capabilities: {
      'browserName': 'chrome'
    },
    suites: {
      login_tests: '../tests/login_spec.js'      
    },    
    framework: 'jasmine',

    // Setup the report before any tests start
    beforeLaunch: function() {
      return new Promise(function(resolve){
        reporter.beforeLaunch(resolve);
      });
    },

    // Assign the test reporter to each running instance
    onPrepare: function() {
      jasmine.getEnv().addReporter(reporter);
      browser.manage().window().maximize();
      browser.manage().timeouts().implicitlyWait(5000);
    },

    // Close the report after all tests finish
    afterLaunch: function(exitCode) {
      return new Promise(function(resolve){
        reporter.afterLaunch(resolve.bind(this, exitCode));
      });
    }
  }