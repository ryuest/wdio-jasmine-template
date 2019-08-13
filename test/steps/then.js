const { Then } = require('cucumber')

import chai from 'chai';
import Page from '../support/action/page';

let expect = chai.expect;
let page = new Page();


Then(/^The page title is "([^"]*)"$/, keyword => {
    page.getTitle().should.equal(keyword);
});

Then(/^(-?\d+) song have name "([^"]*)"$/, (number, keyword) => {
    let songMenuTitle = $('.eight').$$('.item')[number].$('div[class="content"]')
    expect(songMenuTitle.getText()).to.equal(keyword);
    let selectedSongTitle = $$('.column.eight.wide')[1].$('p')
    expect(selectedSongTitle.getText()).to.include(keyword)
});