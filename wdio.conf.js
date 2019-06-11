exports.config = {

    runner: 'local',
    specs: [
        './test/specs/**/*.js'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],

    maxInstances: 1,

    capabilities: [{
        // maxInstances can get overwritten per capability. So if you have an in-house Selenium
        // grid with only 5 firefox instances available you can make sure that not more than
        // 5 instances get started at a time.
        maxInstances: 5,
        //
        browserName: 'chrome',
        chromeOptions: {
            args: ['--window-size=1920,1080']
        }
    }],

    sync: true,

    // Level of logging verbosity: silent | verbose | command | data | result | error
    //logLevel: 'command',

    // Enables colors for log output.
    coloredLogs: true,
    //
    // If you only want to run your tests until a specific amount of tests have failed use
    // bail (default is 0 - don't bail, run all tests).
    bail: 0,
    //
    // Saves a screenshot to a given path if a command fails.
    screenshotPath: './reports/',
    //
    // Set a base URL in order to shorten url command calls. If your url parameter starts
    // with "/", then the base url gets prepended.
    baseUrl: 'https://github.com',
    //
    // Default timeout for all waitFor* commands.
    waitforTimeout: 10000,

    services: ['chromedriver'],
    port: 9515,
    path: '/',

    //  services: ['devtools', 'applitools', 'appium', 'chromedriver', 'docker'],

    framework: 'mocha',

    reporters: ['allure'],

     allure: {
         outputDir: './allure-results/',
         disableWebdriverStepsReporting: false,
         useCucumberStepReporter: false,
     },


    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
}