Feature: Test how clicks are handled on a certain element
    As a developer
    I want to be able to test how (double) clicks are handled by certain elements

    Background:
        Given I open the site "/"

    Scenario: Double click on the button #toggleMessage should display another message
        When  I doubleclick on the button "#toggleMessage"
        Then  I expect that element "#message1" is not visible
        And   I expect that element "#message2" is visible

    Scenario: Single click on the element #toggleBackground should make the elemnt red
        When  I click on the element "#toggleBackground"

    Scenario: Double click on the element #toggleBackground should make the elemnt blue
        When  I doubleclick on the element "#toggleBackground"
