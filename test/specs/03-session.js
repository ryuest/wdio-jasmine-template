var log4js = require('log4js');
var logger = log4js.getLogger();
logger.level = 'debug';
logger.debug("Some debug messages");

describe('WH Spain Login', () => {
  it('Login for WH Spain', () => {
    browser.url('SPAIN')

    $('button[data-test-id="@sitebase/login-button"]').click()
    $('#login-form-username').setValue('ACCOUNT_NAME')
    $('#login-form-password').setValue('PASSWORD')
    $('#login-form-submit-button').click()

    const title = browser.getTitle()
    console.log('Title is: ' + title)
  })
})