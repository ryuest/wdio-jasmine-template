const { When } = require('cucumber')

import chai from 'chai';
import SongList from '../../pageobjects/songlist';
import clickElement from '../support/action/clickElement';

let expect = chai.expect;


When(/^I click on (-?\d+) song$/, number => {
    SongList.selectSongButton(number).click();    
});

When(/^I (click|doubleclick) on the (link|button|element) "([^"]*)?"$/, (action, type, element) => {
    clickElement(action, type, element)
});
