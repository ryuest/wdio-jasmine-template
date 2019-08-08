const { Then } = require('cucumber')

import chai from 'chai';
import Page from '../support/action/page';

let expect = chai.expect;
let page = new Page();


Then(/^I drag and Drop the box$/, () => {
    const links = $$('.ui.primary.button')[1];
    const submit = $('button[type="submit"]');
     console.log('HERE 777' )
     submit.click();
     console.log('HERE 888')
  //   browser.click(links);
    console.log('HERE 999' + submit.getText())
     links.click();
    console.log('HERE 000' + links.getText())
    let title = $('[class*="eight wide"].column');
    expect(title).getText().to.equal('Maca2rena');
});