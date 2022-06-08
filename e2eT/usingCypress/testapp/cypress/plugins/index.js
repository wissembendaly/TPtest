const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = (on, config) => {
  on('file:preprocessor', cucumber()),
  on('before:browser:launch', (browser = {}, launchOptions) => {
   // if (browser.name === 'chrome') {
      
      return launchOptions;
  //  }
  });
}