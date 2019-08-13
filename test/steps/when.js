const { When } = require('cucumber')

import chai from 'chai';
import Page from '../support/action/page';

let expect = chai.expect;
let page = new Page();


When(/^I click on (-?\d+) song$/, number => {
    let links = $$('.column.eight.wide')[0].$('.ui.divided.list').$$('.item')[number].$('.ui.button.primary')
    links.click();    
});
