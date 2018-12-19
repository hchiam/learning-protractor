exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['todo-spec.js'],
  multiCapabilities: [{
    browserName: 'firefox'
  }, {
    browserName: 'chrome'
  }]
};
// You can use port 8000 if you use: webdriver-manager start --seleniumPort 8000
