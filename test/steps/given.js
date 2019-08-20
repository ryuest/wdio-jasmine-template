const { Given } = require('cucumber')

import chai from 'chai';
import Page from '../../pageobjects/page';
import openWebsite from '/Users/jboiko/git3/react-webpack-babel-template/test/support/action/openWebsite';

let expect = chai.expect;

Given('the Localhost page loaded', async () => {
    return Page.goHome();
})

Given(/^I open the (url|site) "([^"]*)?"$/, async () => {
    return Page.goToUrl(keyword);
})

Given(/^I open the (url|site) "([^"]*)?"$/, async () => {
        return openWebsite
})