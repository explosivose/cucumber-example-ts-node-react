
Feature: Emoji Search

  Scenario: Visiting the emoji search page
    Given I am on the emoji search page
    Then I should see the title "Emoji Search"
    And I can see the search bar
    And there should be some emoji listed

  Scenario Outline: Searching for an emoji
    Given I am on the emoji search page
    When I search for "<keyword>"
    Then I should only see emoji which match the keyword
    Examples:
      | keyword |
      | angry |
      | happy |
      | dance |
  
  Scenario: Searching for cucumber
    Given I am on the emoji search page
    When I search for "cucumber"
    Then I should only see one emoji
    And I should only see emoji which match the keyword
