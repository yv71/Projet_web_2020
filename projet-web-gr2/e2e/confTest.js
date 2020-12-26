exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: [
      /*'./src/spec.js',*/
      './src/silo.js',
      './src/tremie.js',
      './src/boisseau.js',
    ],
  jasmineNodeOpts: {
        showColors: true, // Use colors in the command line report.
   }
}
