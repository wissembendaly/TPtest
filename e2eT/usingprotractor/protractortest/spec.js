// spec.js
describe('testing our application', function() {
    
      
    var button = element(by.id('button')); 

    var homepagemessage = element(by.id('message')); 

    var name = element(by.id('name')); 
    
    var email = element(by.id('email')); 
    
    var phone = element(by.id('phone')); 

    var appointments = element(by.css('.AppointmentsClass')); 

    var location1 = element(by.id("location1"))

    beforeEach(function() {
      //browser.waitForAngular()
      //browser.wait(EC.presenceOf(detailsTableResidents), 3500);
      //browser.manage().timeouts().pageLoadTimeout(10000); solution for sleep
      //browser.ignoreSynchronization = true;
      browser.waitForAngularEnabled(false);
      browser.get('http://localhost:4200/');
    });
    
    
    it('verify home page message', function() {

      expect(homepagemessage.getText()).toContain('Checkout your profile page add details about you'); 
    });


    it('go to profile and verify name', function() { 

      button.click();
      expect(name.getText()).toContain('wissem');
    });


  

    it('click into appointments', function() {
      button.click();
      expect(email.getAttribute('value')).toEqual('wissembendaly95@gmail.com');

      expect(phone.getAttribute('value')).toEqual('92462913');
    });

    // it('click into appointments', function() {
    //   button.click();
    //   expect(email.getAttribute('value')).toEqual('wissembendaly95@gmail.com');
    //   email.clear();
    //   email.sendKeys("wissembendaly2@gmail.com")
    //   expect(email.getAttribute('value')).toEqual('wissembendaly2@gmail.com');
    //   phone.clear();
    //   phone.sendKeys('92462999');
    //   expect(phone.getAttribute('value')).toEqual('92462999');
    // });


    it('go to appointments', function() {
  
      browser.get('http://localhost:4200/appointment');
      
      expect(location1.getText()).toContain('Grombalia');

    });

 

  
  });