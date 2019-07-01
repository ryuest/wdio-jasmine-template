exports.config = {
  hostname: 'chromedriver',
  path: '/',
     // Specify Test Files
     specs: [
       './test/features/**/*.feature'
     ],
  capabilities: [{
    // Set maxInstances to 1 if screen recordings are enabled:
    // maxInstances: 1,
    browserName: 'chrome',
    chromeOptions: {
      // Disable headless mode if screen recordings are enabled:
      args: ['--headless', '--window-size=1440,900']
    }
  }],
  baseUrl: 'https://github.com',
  logLevel: 'command',
  framework: 'cucumber',

  reporters: ['cucumber', 'allure'],

  allure: {
    outputDir: './allure-results/',
    disableWebdriverStepsReporting: false,
    useCucumberStepReporter: false,
  },


  cucumberOpts: {
    require: ['./test/features/**/*.js'], // <string[]> (file/dir) require files before executing features
    backtrace: false, // <boolean> show full backtrace for errors
    compiler: [], // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
    dryRun: false, // <boolean> invoke formatters without executing steps
    failFast: false, // <boolean> abort the run on first failure
    format: ['pretty'], // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
    colors: true, // <boolean> disable colors in formatter output
    snippets: true, // <boolean> hide step definition snippets for pending steps
    source: true, // <boolean> hide source uris
    profile: [], // <string[]> (name) specify the profile to use
    strict: false, // <boolean> fail if there are any undefined or pending steps
    tags: [], // <string[]> (expression) only execute the features or scenarios with tags matching the expression
    timeout: 20000, // <number> timeout for step definitions
    ignoreUndefinedDefinitions: false, // <boolean> Enable this config to treat undefined definitions as warnings.
  },
}