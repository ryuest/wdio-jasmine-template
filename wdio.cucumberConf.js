exports.config = {

    specs: [
       // './test/features/**/dragAndDrop.feature'
        './test/features/**/page.feature'
        // './test/features/**/*.feature'
        // './test/specs/**/*.js'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
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
    logLevel: 'debug',

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
    baseUrl: 'http://localhost:8080/',
    //
    // Default timeout for all waitFor* commands.
    waitforTimeout: 10000,

    services: ['chromedriver'],
    port: 9515,
    path: '/',

    //  services: ['devtools', 'applitools', 'appium', 'chromedriver', 'docker'],


    framework: 'cucumber',

    reporters: ['spec', 'allure'],

    allure: {
        outputDir: './allure-results/',
        disableWebdriverStepsReporting: false,
        useCucumberStepReporter: false,
    },


    cucumberOpts: {
      //  require: ['./test/features/**/*.js'], // <string[]> (file/dir) require files before executing features
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
        requireModule: [
            '@babel/register'
        ],

        tagExpression: 'not @skip',

        require: [
            //'./test/steps/dragAndDrop.js',
            './test/steps/given.js',
            './test/steps/then.js',
            './test/steps/when.js',
            // Or search a (sub)folder for JS files with a wildcard
            // works since version 1.1 of the wdio-cucumber-framework
            // './src/**/*.js',
        ],
    },

        before: function () {
            /**
             * Setup the Chai assertion framework
             */
            const chai = require('chai');
            global.expect = chai.expect;
            global.assert = chai.assert;
            global.should = chai.should();
        },
}