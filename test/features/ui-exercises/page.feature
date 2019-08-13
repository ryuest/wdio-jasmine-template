Feature: Home page

Scenario: User go to home page
    Given the Localhost page loaded
    Then The page title is "DEMO APP"

Scenario Outline: User select from the list the Song - <songname>
    When I click on <number> song
    Then <number> song have name "<songname>"

        Examples: "Songs list"
        |number| |songname|
        |0| |No Scrubs|
        |1| |Maca2rena|
        |2| |All Star|
        |3| |I Want it That Way|
