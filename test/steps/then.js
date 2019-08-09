const { Then } = require('cucumber')

import chai from 'chai';
import Page from '../support/action/page';

let expect = chai.expect;


Then(/^I click on (-?\d+) song with name "([^"]*)"$/, (number, keyword) => {
    const links = $$('.ui.primary.button')[number];
    links.click();
    let songMenuTitle = $('.eight').$$('.item')[number].$('div[class="content"]')
    expect(songMenuTitle.getText()).to.equal(keyword);
    let selectedSongTitle = $$('.column.eight.wide')[number].$('p')
    expect(selectedSongTitle.getText()).to.include(keyword)
});