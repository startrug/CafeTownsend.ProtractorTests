exports.config = {
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    specs: ['../tests/login_spec.js'],    
    capabilities: {
      'browserName': 'chrome'
    },
    framework: 'jasmine'
  };