// conf.js
var HtmlReporter = require('protractor-beautiful-reporter');

exports.config = {
    allScriptsTimeout: 60000,
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec.js'],
    onPrepare: function() {
      // Add a screenshot reporter and store screenshots to `/Reports/screenshots`:
      jasmine.getEnv().addReporter(new HtmlReporter({
              baseDirectory: 'Reports/screenshots'
           }).getJasmine2Reporter());
        }
  }