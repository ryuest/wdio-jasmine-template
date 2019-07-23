const { Given, When, Then } = require('cucumber')
const { join } = require('path')

Given('the Localhost page loaded', {timeout: 70000}, () => {
 console.log('HERE 0 ------>>>>>>>>>>> ')
   browser.url('/')
   browser.getTitle().should.equal('DEMO APP');
 //  browser.saveScreenshot(getScreenshotPath('GIVEN Drag and Drop box'))
    let elem = $('#visible')
    let isExisting = elem.isExisting()
    console.log('HERE ------>>>>>>>>>>> ' + isExisting)
    console.log(elem.getText());
    expect(elem.getText()).to.equal('I\'m a visible element')
    console.log('HERE 2 ------>>>>>>>>>>> ' + isExisting)
})

When(/^I go to the top games configuration page$/, () => {
     let elem = $('#visible')
     let isExisting = elem.isExisting()
     console.log('HERE 5 ------>>>>>>>>>>> ' + isExisting)
     console.log(elem.getText());
     expect(elem.getText()).to.equal('I\'m a visible element')
     console.log('HERE 6 ------>>>>>>>>>>> ' + isExisting)

})

Then('I drag and Drop the box', () => {
   let elem = $('#visible')
   let isExisting = elem.isExisting()
   console.log('HERE 3 ------>>>>>>>>>>> ' + isExisting)
   console.log(elem.getText());
   expect(elem.getText()).to.equal('I\'m a visible element')
   console.log('HERE 4 ------>>>>>>>>>>> ' + isExisting)
   browser.saveScreenshot(getScreenshotPath('THEN Drag and Drop box'))
})