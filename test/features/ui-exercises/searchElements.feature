Feature: Search elements

  Scenario: Test the class of search field element
    Given the Localhost page loaded
    When  I doubleclick on the button "#toggleMessage"
    Then  I expect that element "#message1" is not visible
    And   I expect that element "#message2" is visible