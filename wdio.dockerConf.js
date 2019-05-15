exports.config = Object.assign({}, require('./hooks'), {
    hostname: 'chromedriver',
    path: '/',
    capabilities: [{
        // Set maxInstances to 1 if screen recordings are enabled:
        // maxInstances: 1,
        browserName: 'chrome',
        chromeOptions: {
            // Disable headless mode if screen recordings are enabled:
            args: ['--window-size=1440,900']
        }
    }],
    logLevel: 'warn',
    reporters: ['spec'],
    framework: 'mocha',
    mochaOpts: {
        timeout: 60000
    },
    specs: ['test/specs/**/*.js'],
    maximizeWindow: true,
    screenshots: {
        saveOnFail: true
    },
    videos: {
        enabled: false,
        resolution: '1440x900',
        startDelay: 500,
        stopDelay: 500
    },
    assetsDir: '/home/webdriver/assets/',
    mailhog: {
        host: 'mailhog'
    },
    baseUrl: 'https://www.google.co.uk/'
})