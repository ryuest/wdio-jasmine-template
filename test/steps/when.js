const { When } = require('cucumber')

import chai from 'chai';
import Page from '../support/action/page';

let expect = chai.expect;
let page = new Page();


When(/^I go to the top games configuration page$/, () => {
    page.getTitle().should.equal('DEMO APP');
});
