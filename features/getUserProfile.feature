
Feature: Retrieve User Profile

  @positive
  Scenario: Retrieve User Profile
    Given User logged in to the app
    When user get the user profile
    Then user successfully retrieve the profile
