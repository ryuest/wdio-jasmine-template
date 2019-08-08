const { Given } = require('cucumber')

import chai from 'chai';
import Page from '../support/action/page';

let expect = chai.expect;
let page = new Page();

Given('the Localhost page loaded', async () => {
                return page.goHome();

})