
describe('Drag and Drop', () => {
  it('do it for Drag and Drop', () => {
    browser.url('/')
 //   browser.saveScreenshot('./reports/sessionTest2.png');

    let elem = $('#visible')
    let isExisting = elem.isExisting()
    console.log('HERE ------>>>>>>>>>>>')
    console.log(elem.getText()); // outputs: false
   

   // $('#draggable').dragAndDrop('#droppable')
  //  const toggleButton = $('#visible');

    // Save the radio buttons by their text using Xpath
  //  const firstRadio = $("//label[text()='First Radio']/input");
 //   const secondRadio = $("//label[text()='Second Radio']/input");

  //  toggleButton.click();
  console.log('HERE222 ------>>>>>>>>>>>')
    expect(elem).to.have.text('I\'m a visible element')
  //  expect(secondRadio.isSelected()).toBe(false);

    browser.saveScreenshot(getScreenshotPath('THEN Drag and Drop box'))
  })
})