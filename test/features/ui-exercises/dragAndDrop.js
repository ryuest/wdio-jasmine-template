const { Given, When, Then } = require('cucumber')
const { join } = require('path')
const { screenshotPath } = require('../../../wdio.chromedriverConf').config
const getScreenshotPath = (name) => join(screenshotPath, `${browser.desiredCapabilities.browserName}.${name}.png`)

Given('the Localhost page loaded', {timeout: 70000}, () => {
   browser.url('/')
   browser.getTitle().should.equal('DEMO APP');
   browser.saveScreenshot(getScreenshotPath('GIVEN Drag and Drop box'))
    let elem = $('#visible')
    let isExisting = elem.isExisting()
    console.log('HERE ------>>>>>>>>>>> ' + isExisting)
    console.log(elem.getText());
    expect(elem.getText()).to.equal('I\'m a visible element')
    console.log('HERE 2 ------>>>>>>>>>>> ' + isExisting)
})

When('I press enter in the search box', () => {
     let elem = $('#visible')
     let isExisting = elem.isExisting()
     console.log('HERE 3 ------>>>>>>>>>>> ' + isExisting)
     console.log(elem.getText());
     expect(elem.getText()).to.equal('I\'m a viSsible element')
     console.log('HERE 4 ------>>>>>>>>>>> ' + isExisting)

})

Then('I drag and Drop the box', () => {
   let elem = $('#visible')
   let isExisting = elem.isExisting()
   console.log('HERE 3 ------>>>>>>>>>>> ' + isExisting)
   console.log(elem.getText());
   expect(elem.getText()).to.equal('I\'m a viSsible element')
   console.log('HERE 4 ------>>>>>>>>>>> ' + isExisting)
   browser.saveScreenshot(getScreenshotPath('THEN Drag and Drop box'))
})