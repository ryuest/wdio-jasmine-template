describe('Local Cards', () => {
  it('searches for WebdriverIO', () => {
    browser.url('/')
    browser.saveScreenshot('./reports/sessionTest2.png');

    var logout = browser.element('.green');
    logout.waitForExist(5000);
    console.log('FAILING ON PURPORSE to click not exist element: ' + logout)
   browser.click('#search_button_homepage');
   

    const title = browser.getTitle()
    console.log('Title is: ' + title)
    // outputs: "Title is: WebdriverIO (Software) at DuckDuckGo"
  })
})