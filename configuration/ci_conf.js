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
    
    onPrepare: function() {      
      browser.manage().window().maximize();
      browser.manage().timeouts().implicitlyWait(5000);        
    }    
  }