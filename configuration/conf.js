exports.config = {
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    rootElement: '*[ng-app]',
    specs: [
      '../tests/login_spec.js', 
      '../tests/logged_in_spec.js'
    ],        
    capabilities: {
      'browserName': 'chrome'
    },
    suites: {
      login_tests: '../tests/login_spec.js',
      logged_in_tests: '../logged_in.js'      
    },    
    framework: 'jasmine',        
    
    onPrepare: function() {      
      browser.manage().window().maximize();
      browser.manage().timeouts().implicitlyWait(5000);      

      var AllureReporter = require('jasmine-allure-reporter');
      jasmine.getEnv().addReporter(new AllureReporter({
      resultsDir: '../allure-results'
      }));
      
      jasmine.getEnv().afterEach(function(done){
      browser.takeScreenshot().then(function (png) {
        allure.createAttachment('Screenshot', function () {
          return new Buffer(png, 'base64')
        }, 'image/png')();
        done();
      })
    });
    }    
  }