const { Then } = require('cucumber')

import chai from 'chai';
import Page from '../../pageobjects/page';
import SongList from '../../pageobjects/songlist';
import isVisible from '../support/check/isVisible';
import checkClass from '../support/check/checkClass';

let expect = chai.expect;


Then(/^The page title is "([^"]*)"$/, keyword => {
    Page.getTitle().should.equal(keyword);
});

Then(/^(-?\d+) song have name "([^"]*)"$/, (number, keyword) => {
    expect(SongList.songMenuTitle(number).getText()).to.equal(keyword);
    expect(SongList.selectedSongTitle().getText()).to.include(keyword)
});

Then(
    /^I expect that element "([^"]*)?" is( not)* visible$/, (element, falseCase) => {
    isVisible(element, falseCase)
});

Then(/^I expect that element "([^"]*)?" (has|does not have) the class "([^"]*)?"$/, (elem, falseCase, expectedClassName) => {
        checkClass(elem, falseCase, expectedClassName)
});