const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // viewportHeight:1080,
  // viewportWidth:1920,
  reporter: 'mochawesome',
  reporterOptions: {
    useInlineDiffs: true,
    embeddedScreenshots: true,
    reportDir: 'cypress/results',
    reportFilename: '[name].html',
    overwrite: true,
    html: true,
    json: true,
  },
  
  screenshotOnRunFailure:true,
  video:false,
  watchForFileChanges:true,
  experimentalStudio:true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://127.0.0.1:8000/"
  },
});
