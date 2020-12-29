// conf.js
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./src/test.js'],
  onPrepare: async () => {
   await browser.waitForAngularEnabled(false);
 }

}
