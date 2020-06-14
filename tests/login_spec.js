const userName = 'Luke';
const userPassword = 'Skywalker'

describe('CafeTownsend-AngularJS-Rails First Test', function() {
    it('website should have expected title', function() {      
      browser.manage().window().maximize();
      browser.get('http://cafetownsend-angular-rails.herokuapp.com/login');  
      
      expect(browser.getTitle()).toEqual('CafeTownsend-AngularJS-Rails');
    });

    it('Before fill out login form, \"Login\" button is disabled', function() {
      var loginButtonEnabled = $('[type="submit"]').getAttribute('ng-disabled');      
      
      expect(loginButtonEnabled).toEqual('true');      
    });

    it('User can enter login', function() {
      var userNameInput = element(by.model('user.name'));

      userNameInput.sendKeys(userName);
      
      expect(userNameInput.getAttribute('value')).toEqual(userName);      
    });

    it('user can enter password', function() {
      var userPasswordInput = element(by.model('user.password'));

      userPasswordInput.sendKeys(userPassword);
      
      expect(userPasswordInput.getAttribute('value')).toEqual(userPassword);     
    });

    it('user can log in', function() {     
      $('[type="submit"]').click();

      var greetings = element(by.id('greetings'));

      expect(greetings.isPresent()).toBe(true);
      expect(greetings.getText()).toEqual('Hello ' + userName);
    });

    it('user can log out', function() {            
      $('[ng-click="logout()"]').click();      
    });
  });