exports.config = {
  framework: 'jasmine',
  capabilities: {
    'browserName': 'firefox'
  },
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec.js']
}